import { procedure, prefix, get, post, operation } from "vovk";

@prefix("npvs")
export default class NpvController {
  @operation({
    summary: "Get Npvs",
  })
  @get()
  static getNpvs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Npv",
  })
  @post("{id}")
  static createNpv = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
