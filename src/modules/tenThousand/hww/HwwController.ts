import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hwws")
export default class HwwController {
  @operation({
    summary: "Get Hwws",
  })
  @get()
  static getHwws = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hww",
  })
  @post("{id}")
  static createHww = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
