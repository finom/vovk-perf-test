import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eky")
export default class EkyController {
  @operation({
    summary: "Get Eky",
  })
  @get()
  static getEky = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Eky",
  })
  @post("{id}")
  static createEky = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
