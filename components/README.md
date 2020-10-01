n# icon-animate-xxl
Icon animations for react-native compatible with oblador vector-icons

![npm](https://img.shields.io/npm/dw/icon-animate-xxl?logo=npm) ![npm](https://img.shields.io/npm/v/icon-animate-xxl?logo=npm)

- [Installation](#installation)
- [Examples](#examples)
- [Properties](#properties)
- [License](#license)

## Installation

1. Run: `$ npm i icon-animate-xxl`
2. In your Project: `import IconAnimate from "icon-animate-xxl"`

## Example

```js
import React from "react";
import {View} from "react-native";
import IconAnimate from "icon-animate-xxl"
export default function App() {
  return (
    <View>
      <IconAnimate
        name={"heart"}
        color={"#f45"}
        size={20}
        animation={"explode"}
        doppelganger={"heart-o"}
        animation={"explode"}
      />
    </View>
  );
}
});
```

### Properties

You can build your animated icon with these props:

| Prop               | Description                                                                                         | Default   |
| ------------------ | --------------------------------------------------------------------------------------------------- | --------- |
| **`name`**         | Name of icon, use for example`heart`.                                                               | _None_    |
| **`size`**         | Icon size.                                                                                          | 20`       |
| **`color`**        | Text and icon color, use `iconStyle` or nest a `Text` component if you need different colors.       | _None_    |
| **`animation`**    | write the different animation options.                                                              | "explode" |
| **`doppelganger`** | this is an animation effect for explode which shows a mirror effect of the icon like a doppelganger | _None_    |

## License

This project is licenced under the [MIT License](http://opensource.org/licenses/mit-license.html).

Any bundled fonts are copyright to their respective authors and mostly under MIT or [SIL OFL](http://scripts.sil.org/OFL).y bundled fonts are copyright to their respective authors and mostly under MIT or [SIL OFL](http://scripts.sil.org/OFL).
