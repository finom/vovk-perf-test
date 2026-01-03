import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jnas")
export default class JnaController {
  @operation({
    summary: "Get Jnas",
  })
  @get()
  static getJnas = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jna",
  })
  @post("{id}")
  static createJna = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
