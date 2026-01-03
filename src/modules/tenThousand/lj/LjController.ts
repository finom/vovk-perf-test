import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ljs")
export default class LjController {
  @operation({
    summary: "Get Ljs",
  })
  @get()
  static getLjs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lj",
  })
  @post("{id}")
  static createLj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
