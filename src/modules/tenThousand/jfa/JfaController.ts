import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jfas")
export default class JfaController {
  @operation({
    summary: "Get Jfas",
  })
  @get()
  static getJfas = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jfa",
  })
  @post("{id}")
  static createJfa = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
