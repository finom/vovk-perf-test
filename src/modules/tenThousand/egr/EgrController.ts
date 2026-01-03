import { procedure, prefix, get, post, operation } from "vovk";

@prefix("egrs")
export default class EgrController {
  @operation({
    summary: "Get Egrs",
  })
  @get()
  static getEgrs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Egr",
  })
  @post("{id}")
  static createEgr = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
