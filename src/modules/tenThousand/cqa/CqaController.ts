import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cqas")
export default class CqaController {
  @operation({
    summary: "Get Cqas",
  })
  @get()
  static getCqas = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cqa",
  })
  @post("{id}")
  static createCqa = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
