import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lmvs")
export default class LmvController {
  @operation({
    summary: "Get Lmvs",
  })
  @get()
  static getLmvs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lmv",
  })
  @post("{id}")
  static createLmv = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
