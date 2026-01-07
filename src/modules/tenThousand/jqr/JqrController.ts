import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jqr")
export default class JqrController {
  @operation({
    summary: "Get Jqr",
  })
  @get()
  static getJqr = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jqr",
  })
  @post("{id}")
  static createJqr = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
