import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fqhs")
export default class FqhController {
  @operation({
    summary: "Get Fqhs",
  })
  @get()
  static getFqhs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fqh",
  })
  @post("{id}")
  static createFqh = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
