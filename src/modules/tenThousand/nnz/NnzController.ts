import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nnz")
export default class NnzController {
  @operation({
    summary: "Get Nnz",
  })
  @get()
  static getNnz = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nnz",
  })
  @post("{id}")
  static createNnz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
