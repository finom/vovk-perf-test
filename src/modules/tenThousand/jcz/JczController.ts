import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jczs")
export default class JczController {
  @operation({
    summary: "Get Jczs",
  })
  @get()
  static getJczs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jcz",
  })
  @post("{id}")
  static createJcz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
