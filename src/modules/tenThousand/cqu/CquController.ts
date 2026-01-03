import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cqus")
export default class CquController {
  @operation({
    summary: "Get Cqus",
  })
  @get()
  static getCqus = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cqu",
  })
  @post("{id}")
  static createCqu = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
