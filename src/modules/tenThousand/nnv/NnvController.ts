import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nnv")
export default class NnvController {
  @operation({
    summary: "Get Nnv",
  })
  @get()
  static getNnv = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nnv",
  })
  @post("{id}")
  static createNnv = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
