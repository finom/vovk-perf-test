import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kuvs")
export default class KuvController {
  @operation({
    summary: "Get Kuvs",
  })
  @get()
  static getKuvs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kuv",
  })
  @post("{id}")
  static createKuv = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
