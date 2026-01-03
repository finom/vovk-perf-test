import { procedure, prefix, get, post, operation } from "vovk";

@prefix("leds")
export default class LedController {
  @operation({
    summary: "Get Leds",
  })
  @get()
  static getLeds = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Led",
  })
  @post("{id}")
  static createLed = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
