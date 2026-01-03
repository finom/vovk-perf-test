import { procedure, prefix, get, post, operation } from "vovk";

@prefix("idas")
export default class IdaController {
  @operation({
    summary: "Get Idas",
  })
  @get()
  static getIdas = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ida",
  })
  @post("{id}")
  static createIda = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
