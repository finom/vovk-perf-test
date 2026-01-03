import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hgxes")
export default class HgxController {
  @operation({
    summary: "Get Hgxes",
  })
  @get()
  static getHgxes = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hgx",
  })
  @post("{id}")
  static createHgx = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
