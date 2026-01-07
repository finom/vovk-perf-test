import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ja")
export default class JaController {
  @operation({
    summary: "Get Ja",
  })
  @get()
  static getJa = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ja",
  })
  @post("{id}")
  static createJa = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
