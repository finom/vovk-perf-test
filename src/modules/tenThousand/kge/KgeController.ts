import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kges")
export default class KgeController {
  @operation({
    summary: "Get Kges",
  })
  @get()
  static getKges = procedure({
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
