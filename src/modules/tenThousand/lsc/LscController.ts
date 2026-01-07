import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lsc")
export default class LscController {
  @operation({
    summary: "Get Lsc",
  })
  @get()
  static getLsc = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lsc",
  })
  @post("{id}")
  static createLsc = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
