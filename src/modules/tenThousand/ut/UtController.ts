import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ut")
export default class UtController {
  @operation({
    summary: "Get Ut",
  })
  @get()
  static getUt = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ut",
  })
  @post("{id}")
  static createUt = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
