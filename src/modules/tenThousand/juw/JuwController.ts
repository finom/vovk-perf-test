import { procedure, prefix, get, post, operation } from "vovk";

@prefix("juw")
export default class JuwController {
  @operation({
    summary: "Get Juw",
  })
  @get()
  static getJuw = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Juw",
  })
  @post("{id}")
  static createJuw = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
