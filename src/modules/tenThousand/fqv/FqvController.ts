import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fqvs")
export default class FqvController {
  @operation({
    summary: "Get Fqvs",
  })
  @get()
  static getFqvs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fqv",
  })
  @post("{id}")
  static createFqv = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
