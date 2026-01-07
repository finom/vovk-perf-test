import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hgz")
export default class HgzController {
  @operation({
    summary: "Get Hgz",
  })
  @get()
  static getHgz = procedure({
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
