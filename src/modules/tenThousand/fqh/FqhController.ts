import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fqh")
export default class FqhController {
  @operation({
    summary: "Get Fqh",
  })
  @get()
  static getFqh = procedure({
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
