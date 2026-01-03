import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jras")
export default class JraController {
  @operation({
    summary: "Get Jras",
  })
  @get()
  static getJras = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jra",
  })
  @post("{id}")
  static createJra = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
