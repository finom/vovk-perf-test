import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jres")
export default class JreController {
  @operation({
    summary: "Get Jres",
  })
  @get()
  static getJres = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jre",
  })
  @post("{id}")
  static createJre = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
