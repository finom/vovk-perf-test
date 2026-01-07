import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nnf")
export default class NnfController {
  @operation({
    summary: "Get Nnf",
  })
  @get()
  static getNnf = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nnf",
  })
  @post("{id}")
  static createNnf = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
