import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fqjs")
export default class FqjController {
  @operation({
    summary: "Get Fqjs",
  })
  @get()
  static getFqjs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fqj",
  })
  @post("{id}")
  static createFqj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
