import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jxzs")
export default class JxzController {
  @operation({
    summary: "Get Jxzs",
  })
  @get()
  static getJxzs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jxz",
  })
  @post("{id}")
  static createJxz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
