import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nnqs")
export default class NnqController {
  @operation({
    summary: "Get Nnqs",
  })
  @get()
  static getNnqs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nnq",
  })
  @post("{id}")
  static createNnq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
