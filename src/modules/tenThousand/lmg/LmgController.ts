import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lmgs")
export default class LmgController {
  @operation({
    summary: "Get Lmgs",
  })
  @get()
  static getLmgs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lmg",
  })
  @post("{id}")
  static createLmg = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
