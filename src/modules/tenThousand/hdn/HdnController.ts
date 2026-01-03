import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hdns")
export default class HdnController {
  @operation({
    summary: "Get Hdns",
  })
  @get()
  static getHdns = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hdn",
  })
  @post("{id}")
  static createHdn = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
