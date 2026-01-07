import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kta")
export default class KtaController {
  @operation({
    summary: "Get Kta",
  })
  @get()
  static getKta = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kta",
  })
  @post("{id}")
  static createKta = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
