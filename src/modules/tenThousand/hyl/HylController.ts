import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hyls")
export default class HylController {
  @operation({
    summary: "Get Hyls",
  })
  @get()
  static getHyls = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hyl",
  })
  @post("{id}")
  static createHyl = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
