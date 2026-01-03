import { procedure, prefix, get, post, operation } from "vovk";

@prefix("imls")
export default class ImlController {
  @operation({
    summary: "Get Imls",
  })
  @get()
  static getImls = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Iml",
  })
  @post("{id}")
  static createIml = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
