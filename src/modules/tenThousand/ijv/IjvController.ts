import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ijvs")
export default class IjvController {
  @operation({
    summary: "Get Ijvs",
  })
  @get()
  static getIjvs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ijv",
  })
  @post("{id}")
  static createIjv = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
