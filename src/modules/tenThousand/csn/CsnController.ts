import { procedure, prefix, get, post, operation } from "vovk";

@prefix("csn")
export default class CsnController {
  @operation({
    summary: "Get Csn",
  })
  @get()
  static getCsn = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Csn",
  })
  @post("{id}")
  static createCsn = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
