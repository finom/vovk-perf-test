import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fsts")
export default class FstController {
  @operation({
    summary: "Get Fsts",
  })
  @get()
  static getFsts = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fst",
  })
  @post("{id}")
  static createFst = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
