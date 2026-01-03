import { procedure, prefix, get, post, operation } from "vovk";

@prefix("krvs")
export default class KrvController {
  @operation({
    summary: "Get Krvs",
  })
  @get()
  static getKrvs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Krv",
  })
  @post("{id}")
  static createKrv = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
