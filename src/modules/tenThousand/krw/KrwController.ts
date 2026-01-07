import { procedure, prefix, get, post, operation } from "vovk";

@prefix("krw")
export default class KrwController {
  @operation({
    summary: "Get Krw",
  })
  @get()
  static getKrw = procedure({
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
