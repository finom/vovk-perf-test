import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kuf")
export default class KufController {
  @operation({
    summary: "Get Kuf",
  })
  @get()
  static getKuf = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kuf",
  })
  @post("{id}")
  static createKuf = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
