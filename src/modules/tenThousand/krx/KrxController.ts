import { procedure, prefix, get, post, operation } from "vovk";

@prefix("krxes")
export default class KrxController {
  @operation({
    summary: "Get Krxes",
  })
  @get()
  static getKrxes = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Krx",
  })
  @post("{id}")
  static createKrx = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
