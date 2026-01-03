import { procedure, prefix, get, post, operation } from "vovk";

@prefix("oas")
export default class OaController {
  @operation({
    summary: "Get Oas",
  })
  @get()
  static getOas = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Oa",
  })
  @post("{id}")
  static createOa = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
