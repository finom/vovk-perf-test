import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ano")
export default class AnoController {
  @operation({
    summary: "Get Ano",
  })
  @get()
  static getAno = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ano",
  })
  @post("{id}")
  static createAno = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
