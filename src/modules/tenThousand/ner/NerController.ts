import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ners")
export default class NerController {
  @operation({
    summary: "Get Ners",
  })
  @get()
  static getNers = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ner",
  })
  @post("{id}")
  static createNer = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
