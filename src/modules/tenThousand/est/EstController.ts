import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ests")
export default class EstController {
  @operation({
    summary: "Get Ests",
  })
  @get()
  static getEsts = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Est",
  })
  @post("{id}")
  static createEst = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
