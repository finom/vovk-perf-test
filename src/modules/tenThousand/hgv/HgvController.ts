import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hgvs")
export default class HgvController {
  @operation({
    summary: "Get Hgvs",
  })
  @get()
  static getHgvs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hgv",
  })
  @post("{id}")
  static createHgv = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
