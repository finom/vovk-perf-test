import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cmcs")
export default class CmcController {
  @operation({
    summary: "Get Cmcs",
  })
  @get()
  static getCmcs = procedure({
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
