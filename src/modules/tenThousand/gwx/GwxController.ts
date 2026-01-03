import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gwxes")
export default class GwxController {
  @operation({
    summary: "Get Gwxes",
  })
  @get()
  static getGwxes = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gwx",
  })
  @post("{id}")
  static createGwx = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
