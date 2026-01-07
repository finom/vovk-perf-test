import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hgx")
export default class HgxController {
  @operation({
    summary: "Get Hgx",
  })
  @get()
  static getHgx = procedure({
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
