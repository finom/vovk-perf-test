import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kpks")
export default class KpkController {
  @operation({
    summary: "Get Kpks",
  })
  @get()
  static getKpks = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kpk",
  })
  @post("{id}")
  static createKpk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
