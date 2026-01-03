import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nncs")
export default class NncController {
  @operation({
    summary: "Get Nncs",
  })
  @get()
  static getNncs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nnc",
  })
  @post("{id}")
  static createNnc = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
