import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hwms")
export default class HwmController {
  @operation({
    summary: "Get Hwms",
  })
  @get()
  static getHwms = procedure({
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
