import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ctbs")
export default class CtbController {
  @operation({
    summary: "Get Ctbs",
  })
  @get()
  static getCtbs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ctb",
  })
  @post("{id}")
  static createCtb = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
