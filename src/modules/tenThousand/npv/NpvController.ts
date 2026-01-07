import { procedure, prefix, get, post, operation } from "vovk";

@prefix("npv")
export default class NpvController {
  @operation({
    summary: "Get Npv",
  })
  @get()
  static getNpv = procedure({
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
