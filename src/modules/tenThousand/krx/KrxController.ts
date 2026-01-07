import { procedure, prefix, get, post, operation } from "vovk";

@prefix("krx")
export default class KrxController {
  @operation({
    summary: "Get Krx",
  })
  @get()
  static getKrx = procedure({
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
