import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ru")
export default class RuController {
  @operation({
    summary: "Get Ru",
  })
  @get()
  static getRu = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ru",
  })
  @post("{id}")
  static createRu = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
