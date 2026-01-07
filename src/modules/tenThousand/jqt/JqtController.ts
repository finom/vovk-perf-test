import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jqt")
export default class JqtController {
  @operation({
    summary: "Get Jqt",
  })
  @get()
  static getJqt = procedure({
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
