import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fqg")
export default class FqgController {
  @operation({
    summary: "Get Fqg",
  })
  @get()
  static getFqg = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fqg",
  })
  @post("{id}")
  static createFqg = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
