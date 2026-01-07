import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hwf")
export default class HwfController {
  @operation({
    summary: "Get Hwf",
  })
  @get()
  static getHwf = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hwf",
  })
  @post("{id}")
  static createHwf = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
