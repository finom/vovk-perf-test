import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cnzs")
export default class CnzController {
  @operation({
    summary: "Get Cnzs",
  })
  @get()
  static getCnzs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cnz",
  })
  @post("{id}")
  static createCnz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
