import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ctl")
export default class CtlController {
  @operation({
    summary: "Get Ctl",
  })
  @get()
  static getCtl = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ctl",
  })
  @post("{id}")
  static createCtl = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
