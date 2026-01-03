import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fqies")
export default class FqyController {
  @operation({
    summary: "Get Fqies",
  })
  @get()
  static getFqies = procedure({
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
