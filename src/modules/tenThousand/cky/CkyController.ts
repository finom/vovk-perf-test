import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ckies")
export default class CkyController {
  @operation({
    summary: "Get Ckies",
  })
  @get()
  static getCkies = procedure({
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
