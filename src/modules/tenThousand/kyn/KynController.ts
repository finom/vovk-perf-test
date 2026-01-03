import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kyns")
export default class KynController {
  @operation({
    summary: "Get Kyns",
  })
  @get()
  static getKyns = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kyn",
  })
  @post("{id}")
  static createKyn = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
