import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hues")
export default class HueController {
  @operation({
    summary: "Get Hues",
  })
  @get()
  static getHues = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hue",
  })
  @post("{id}")
  static createHue = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
