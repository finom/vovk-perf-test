import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jce")
export default class JceController {
  @operation({
    summary: "Get Jce",
  })
  @get()
  static getJce = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jce",
  })
  @post("{id}")
  static createJce = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
