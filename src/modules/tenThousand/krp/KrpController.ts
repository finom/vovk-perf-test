import { procedure, prefix, get, post, operation } from "vovk";

@prefix("krp")
export default class KrpController {
  @operation({
    summary: "Get Krp",
  })
  @get()
  static getKrp = procedure({
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
