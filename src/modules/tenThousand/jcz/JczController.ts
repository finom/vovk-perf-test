import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jcz")
export default class JczController {
  @operation({
    summary: "Get Jcz",
  })
  @get()
  static getJcz = procedure({
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
