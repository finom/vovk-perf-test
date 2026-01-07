import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cme")
export default class CmeController {
  @operation({
    summary: "Get Cme",
  })
  @get()
  static getCme = procedure({
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
