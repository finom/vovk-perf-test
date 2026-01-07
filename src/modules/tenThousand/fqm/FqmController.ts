import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fqm")
export default class FqmController {
  @operation({
    summary: "Get Fqm",
  })
  @get()
  static getFqm = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fqm",
  })
  @post("{id}")
  static createFqm = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
