import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ctg")
export default class CtgController {
  @operation({
    summary: "Get Ctg",
  })
  @get()
  static getCtg = procedure({
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
