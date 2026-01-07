import { procedure, prefix, get, post, operation } from "vovk";

@prefix("auw")
export default class AuwController {
  @operation({
    summary: "Get Auw",
  })
  @get()
  static getAuw = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Auw",
  })
  @post("{id}")
  static createAuw = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
