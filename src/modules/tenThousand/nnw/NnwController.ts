import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nnws")
export default class NnwController {
  @operation({
    summary: "Get Nnws",
  })
  @get()
  static getNnws = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nnw",
  })
  @post("{id}")
  static createNnw = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
