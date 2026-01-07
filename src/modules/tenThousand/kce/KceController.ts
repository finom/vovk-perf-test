import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kce")
export default class KceController {
  @operation({
    summary: "Get Kce",
  })
  @get()
  static getKce = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kce",
  })
  @post("{id}")
  static createKce = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
