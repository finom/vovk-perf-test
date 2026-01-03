import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nnfs")
export default class NnfController {
  @operation({
    summary: "Get Nnfs",
  })
  @get()
  static getNnfs = procedure({
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
