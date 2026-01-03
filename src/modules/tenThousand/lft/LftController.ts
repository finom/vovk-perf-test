import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lfts")
export default class LftController {
  @operation({
    summary: "Get Lfts",
  })
  @get()
  static getLfts = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lft",
  })
  @post("{id}")
  static createLft = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
