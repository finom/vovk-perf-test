import { procedure, prefix, get, post, operation } from "vovk";

@prefix("krws")
export default class KrwController {
  @operation({
    summary: "Get Krws",
  })
  @get()
  static getKrws = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Krw",
  })
  @post("{id}")
  static createKrw = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
