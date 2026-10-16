import torch.nn as nn
class CNNModelV0(nn.Module):
  def __init__(self, input_shape, hidden_units, output_shape):
    super().__init__()
    self.block1 = nn.Sequential(
        nn.Conv2d(in_channels= input_shape, out_channels= hidden_units,
                  kernel_size= 3,
                  stride= 1,
                  padding= 0),
        nn.ReLU(),
        nn.Conv2d(in_channels= hidden_units, out_channels= hidden_units,
                  kernel_size= 3,
                  stride= 1,
                  padding= 0),
        nn.ReLU(),
        nn.MaxPool2d(kernel_size= 2)
    )

    self.block2 = nn.Sequential(
        nn.Conv2d(in_channels= hidden_units, out_channels= hidden_units,
                  kernel_size= 3,
                  stride= 1,
                  padding= 0),
        nn.ReLU(),
        nn.Conv2d(in_channels= hidden_units, out_channels= hidden_units,
                  kernel_size= 3,
                  stride= 1,
                  padding= 0),
        nn.ReLU(),
        nn.MaxPool2d(kernel_size= 2)
    )

    self.classifier = nn.Sequential(
        nn.Flatten(),
        nn.Linear(in_features= hidden_units * 34 * 34, out_features= output_shape)
    )

  def forward(self, x):
    return self.classifier(self.block2(self.block1(x)))
