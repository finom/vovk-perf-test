import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ksn")
export default class KsnController {
  @operation({
    summary: "Get Ksn",
  })
  @get()
  static getKsn = procedure({
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
