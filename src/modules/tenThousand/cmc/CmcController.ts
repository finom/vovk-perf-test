import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cmc")
export default class CmcController {
  @operation({
    summary: "Get Cmc",
  })
  @get()
  static getCmc = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cmc",
  })
  @post("{id}")
  static createCmc = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
