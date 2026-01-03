import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fqms")
export default class FqmController {
  @operation({
    summary: "Get Fqms",
  })
  @get()
  static getFqms = procedure({
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
