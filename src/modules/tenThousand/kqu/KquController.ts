import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kqus")
export default class KquController {
  @operation({
    summary: "Get Kqus",
  })
  @get()
  static getKqus = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kqu",
  })
  @post("{id}")
  static createKqu = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
