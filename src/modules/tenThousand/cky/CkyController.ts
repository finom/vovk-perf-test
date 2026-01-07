import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cky")
export default class CkyController {
  @operation({
    summary: "Get Cky",
  })
  @get()
  static getCky = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cky",
  })
  @post("{id}")
  static createCky = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
