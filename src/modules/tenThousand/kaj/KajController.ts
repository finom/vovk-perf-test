import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kajs")
export default class KajController {
  @operation({
    summary: "Get Kajs",
  })
  @get()
  static getKajs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kaj",
  })
  @post("{id}")
  static createKaj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
