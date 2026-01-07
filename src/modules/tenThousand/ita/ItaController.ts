import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ita")
export default class ItaController {
  @operation({
    summary: "Get Ita",
  })
  @get()
  static getIta = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ita",
  })
  @post("{id}")
  static createIta = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
