import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gtvs")
export default class GtvController {
  @operation({
    summary: "Get Gtvs",
  })
  @get()
  static getGtvs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gtv",
  })
  @post("{id}")
  static createGtv = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
