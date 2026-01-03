import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jxvs")
export default class JxvController {
  @operation({
    summary: "Get Jxvs",
  })
  @get()
  static getJxvs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jxv",
  })
  @post("{id}")
  static createJxv = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
