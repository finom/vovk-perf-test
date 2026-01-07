import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kdn")
export default class KdnController {
  @operation({
    summary: "Get Kdn",
  })
  @get()
  static getKdn = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kdn",
  })
  @post("{id}")
  static createKdn = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
