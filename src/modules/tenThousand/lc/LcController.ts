import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lcs")
export default class LcController {
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
    summary: "Create Lc",
  })
  @post("{id}")
  static createLc = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
