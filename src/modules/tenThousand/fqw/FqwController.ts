import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fqw")
export default class FqwController {
  @operation({
    summary: "Get Fqw",
  })
  @get()
  static getFqw = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fqw",
  })
  @post("{id}")
  static createFqw = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
