import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ctms")
export default class CtmController {
  @operation({
    summary: "Get Ctms",
  })
  @get()
  static getCtms = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ctm",
  })
  @post("{id}")
  static createCtm = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
