import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cres")
export default class CreController {
  @operation({
    summary: "Get Cres",
  })
  @get()
  static getCres = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cre",
  })
  @post("{id}")
  static createCre = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
