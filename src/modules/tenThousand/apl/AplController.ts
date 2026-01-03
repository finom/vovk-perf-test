import { procedure, prefix, get, post, operation } from "vovk";

@prefix("apls")
export default class AplController {
  @operation({
    summary: "Get Apls",
  })
  @get()
  static getApls = procedure({
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
