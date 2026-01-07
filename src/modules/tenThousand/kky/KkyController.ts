import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kky")
export default class KkyController {
  @operation({
    summary: "Get Kky",
  })
  @get()
  static getKky = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kky",
  })
  @post("{id}")
  static createKky = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
