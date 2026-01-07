import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nnj")
export default class NnjController {
  @operation({
    summary: "Get Nnj",
  })
  @get()
  static getNnj = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nnj",
  })
  @post("{id}")
  static createNnj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
