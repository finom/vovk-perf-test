import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nnm")
export default class NnmController {
  @operation({
    summary: "Get Nnm",
  })
  @get()
  static getNnm = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nnm",
  })
  @post("{id}")
  static createNnm = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
