import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jfls")
export default class JflController {
  @operation({
    summary: "Get Jfls",
  })
  @get()
  static getJfls = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jfl",
  })
  @post("{id}")
  static createJfl = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
