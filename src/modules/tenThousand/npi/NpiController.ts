import { procedure, prefix, get, post, operation } from "vovk";

@prefix("npis")
export default class NpiController {
  @operation({
    summary: "Get Npis",
  })
  @get()
  static getNpis = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Npi",
  })
  @post("{id}")
  static createNpi = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
