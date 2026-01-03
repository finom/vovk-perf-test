import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fqus")
export default class FquController {
  @operation({
    summary: "Get Fqus",
  })
  @get()
  static getFqus = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fqu",
  })
  @post("{id}")
  static createFqu = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
