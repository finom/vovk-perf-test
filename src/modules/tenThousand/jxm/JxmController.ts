import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jxm")
export default class JxmController {
  @operation({
    summary: "Get Jxm",
  })
  @get()
  static getJxm = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jxm",
  })
  @post("{id}")
  static createJxm = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
