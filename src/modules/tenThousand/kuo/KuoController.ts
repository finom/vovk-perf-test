import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kuo")
export default class KuoController {
  @operation({
    summary: "Get Kuo",
  })
  @get()
  static getKuo = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kuo",
  })
  @post("{id}")
  static createKuo = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
