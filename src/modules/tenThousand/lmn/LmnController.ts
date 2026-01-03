import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lmns")
export default class LmnController {
  @operation({
    summary: "Get Lmns",
  })
  @get()
  static getLmns = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lmn",
  })
  @post("{id}")
  static createLmn = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
