import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hgzs")
export default class HgzController {
  @operation({
    summary: "Get Hgzs",
  })
  @get()
  static getHgzs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hgz",
  })
  @post("{id}")
  static createHgz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
