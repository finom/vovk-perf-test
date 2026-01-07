import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fqj")
export default class FqjController {
  @operation({
    summary: "Get Fqj",
  })
  @get()
  static getFqj = procedure({
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
