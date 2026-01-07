import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nnc")
export default class NncController {
  @operation({
    summary: "Get Nnc",
  })
  @get()
  static getNnc = procedure({
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
