import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fqy")
export default class FqyController {
  @operation({
    summary: "Get Fqy",
  })
  @get()
  static getFqy = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fqy",
  })
  @post("{id}")
  static createFqy = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
