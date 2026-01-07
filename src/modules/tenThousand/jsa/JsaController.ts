import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jsa")
export default class JsaController {
  @operation({
    summary: "Get Jsa",
  })
  @get()
  static getJsa = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jsa",
  })
  @post("{id}")
  static createJsa = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
