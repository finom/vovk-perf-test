import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jxies")
export default class JxyController {
  @operation({
    summary: "Get Jxies",
  })
  @get()
  static getJxies = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jxy",
  })
  @post("{id}")
  static createJxy = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
