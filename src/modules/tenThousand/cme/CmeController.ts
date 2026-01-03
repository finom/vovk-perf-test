import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cmes")
export default class CmeController {
  @operation({
    summary: "Get Cmes",
  })
  @get()
  static getCmes = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cme",
  })
  @post("{id}")
  static createCme = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
