import { procedure, prefix, get, post, operation } from "vovk";

@prefix("krks")
export default class KrkController {
  @operation({
    summary: "Get Krks",
  })
  @get()
  static getKrks = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Krk",
  })
  @post("{id}")
  static createKrk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
