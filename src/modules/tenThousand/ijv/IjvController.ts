import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ijv")
export default class IjvController {
  @operation({
    summary: "Get Ijv",
  })
  @get()
  static getIjv = procedure({
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
