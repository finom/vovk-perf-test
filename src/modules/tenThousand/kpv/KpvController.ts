import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kpvs")
export default class KpvController {
  @operation({
    summary: "Get Kpvs",
  })
  @get()
  static getKpvs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kpv",
  })
  @post("{id}")
  static createKpv = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
