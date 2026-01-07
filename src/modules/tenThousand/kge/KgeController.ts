import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kge")
export default class KgeController {
  @operation({
    summary: "Get Kge",
  })
  @get()
  static getKge = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kge",
  })
  @post("{id}")
  static createKge = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
