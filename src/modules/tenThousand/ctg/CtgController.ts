import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ctgs")
export default class CtgController {
  @operation({
    summary: "Get Ctgs",
  })
  @get()
  static getCtgs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ctg",
  })
  @post("{id}")
  static createCtg = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
