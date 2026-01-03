import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lcs")
export default class LcsController {
  @operation({
    summary: "Get Lcs",
  })
  @get()
  static getLcs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lcs",
  })
  @post("{id}")
  static createLcs = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
