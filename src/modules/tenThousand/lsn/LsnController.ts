import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lsn")
export default class LsnController {
  @operation({
    summary: "Get Lsn",
  })
  @get()
  static getLsn = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lsn",
  })
  @post("{id}")
  static createLsn = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
