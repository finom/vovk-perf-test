import { procedure, prefix, get, post, operation } from "vovk";

@prefix("aics")
export default class AicController {
  @operation({
    summary: "Get Aics",
  })
  @get()
  static getAics = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Aic",
  })
  @post("{id}")
  static createAic = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
