import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ctd")
export default class CtdController {
  @operation({
    summary: "Get Ctd",
  })
  @get()
  static getCtd = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ctd",
  })
  @post("{id}")
  static createCtd = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
