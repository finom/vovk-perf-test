import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hgws")
export default class HgwController {
  @operation({
    summary: "Get Hgws",
  })
  @get()
  static getHgws = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hgw",
  })
  @post("{id}")
  static createHgw = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
