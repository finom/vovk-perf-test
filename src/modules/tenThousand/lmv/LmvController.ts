import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lmv")
export default class LmvController {
  @operation({
    summary: "Get Lmv",
  })
  @get()
  static getLmv = procedure({
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
