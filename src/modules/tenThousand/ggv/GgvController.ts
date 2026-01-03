import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ggvs")
export default class GgvController {
  @operation({
    summary: "Get Ggvs",
  })
  @get()
  static getGgvs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ggv",
  })
  @post("{id}")
  static createGgv = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
