import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nnks")
export default class NnkController {
  @operation({
    summary: "Get Nnks",
  })
  @get()
  static getNnks = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nnk",
  })
  @post("{id}")
  static createNnk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
