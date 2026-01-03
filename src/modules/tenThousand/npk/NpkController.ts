import { procedure, prefix, get, post, operation } from "vovk";

@prefix("npks")
export default class NpkController {
  @operation({
    summary: "Get Npks",
  })
  @get()
  static getNpks = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Npk",
  })
  @post("{id}")
  static createNpk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
