import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jxw")
export default class JxwController {
  @operation({
    summary: "Get Jxw",
  })
  @get()
  static getJxw = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jxw",
  })
  @post("{id}")
  static createJxw = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
