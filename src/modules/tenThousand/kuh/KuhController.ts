import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kuhs")
export default class KuhController {
  @operation({
    summary: "Get Kuhs",
  })
  @get()
  static getKuhs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kuh",
  })
  @post("{id}")
  static createKuh = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
