import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kls")
export default class KlsController {
  @operation({
    summary: "Get Kls",
  })
  @get()
  static getKls = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kls",
  })
  @post("{id}")
  static createKls = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
