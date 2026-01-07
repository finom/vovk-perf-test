import { procedure, prefix, get, post, operation } from "vovk";

@prefix("apl")
export default class AplController {
  @operation({
    summary: "Get Apl",
  })
  @get()
  static getApl = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Apl",
  })
  @post("{id}")
  static createApl = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
