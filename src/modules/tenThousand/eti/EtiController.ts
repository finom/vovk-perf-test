import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eti")
export default class EtiController {
  @operation({
    summary: "Get Eti",
  })
  @get()
  static getEti = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Eti",
  })
  @post("{id}")
  static createEti = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
