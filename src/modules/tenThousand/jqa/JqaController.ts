import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jqas")
export default class JqaController {
  @operation({
    summary: "Get Jqas",
  })
  @get()
  static getJqas = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jqa",
  })
  @post("{id}")
  static createJqa = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
