import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ipis")
export default class IpiController {
  @operation({
    summary: "Get Ipis",
  })
  @get()
  static getIpis = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ipi",
  })
  @post("{id}")
  static createIpi = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
