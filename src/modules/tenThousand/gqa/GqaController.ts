import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gqas")
export default class GqaController {
  @operation({
    summary: "Get Gqas",
  })
  @get()
  static getGqas = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gqa",
  })
  @post("{id}")
  static createGqa = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
