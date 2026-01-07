import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fqv")
export default class FqvController {
  @operation({
    summary: "Get Fqv",
  })
  @get()
  static getFqv = procedure({
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
