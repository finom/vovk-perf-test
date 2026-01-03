import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jqts")
export default class JqtController {
  @operation({
    summary: "Get Jqts",
  })
  @get()
  static getJqts = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jqt",
  })
  @post("{id}")
  static createJqt = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
