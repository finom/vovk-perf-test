import { procedure, prefix, get, post, operation } from "vovk";

@prefix("krps")
export default class KrpController {
  @operation({
    summary: "Get Krps",
  })
  @get()
  static getKrps = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Krp",
  })
  @post("{id}")
  static createKrp = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
