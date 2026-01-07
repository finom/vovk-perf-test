import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hwm")
export default class HwmController {
  @operation({
    summary: "Get Hwm",
  })
  @get()
  static getHwm = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hwm",
  })
  @post("{id}")
  static createHwm = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
