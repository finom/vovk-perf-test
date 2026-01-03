import { procedure, prefix, get, post, operation } from "vovk";

@prefix("algs")
export default class AlgController {
  @operation({
    summary: "Get Algs",
  })
  @get()
  static getAlgs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Alg",
  })
  @post("{id}")
  static createAlg = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
