import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lev")
export default class LevController {
  @operation({
    summary: "Get Lev",
  })
  @get()
  static getLev = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lev",
  })
  @post("{id}")
  static createLev = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
