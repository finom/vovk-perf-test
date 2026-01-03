import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ksns")
export default class KsnController {
  @operation({
    summary: "Get Ksns",
  })
  @get()
  static getKsns = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ksn",
  })
  @post("{id}")
  static createKsn = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
