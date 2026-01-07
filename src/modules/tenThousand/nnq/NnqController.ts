import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nnq")
export default class NnqController {
  @operation({
    summary: "Get Nnq",
  })
  @get()
  static getNnq = procedure({
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
