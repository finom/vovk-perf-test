import { procedure, prefix, get, post, operation } from "vovk";

@prefix("apas")
export default class ApaController {
  @operation({
    summary: "Get Apas",
  })
  @get()
  static getApas = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Apa",
  })
  @post("{id}")
  static createApa = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
