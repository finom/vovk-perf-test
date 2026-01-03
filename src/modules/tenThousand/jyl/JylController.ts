import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jyls")
export default class JylController {
  @operation({
    summary: "Get Jyls",
  })
  @get()
  static getJyls = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jyl",
  })
  @post("{id}")
  static createJyl = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
