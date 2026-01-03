import { procedure, prefix, get, post, operation } from "vovk";

@prefix("caqs")
export default class CaqController {
  @operation({
    summary: "Get Caqs",
  })
  @get()
  static getCaqs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Caq",
  })
  @post("{id}")
  static createCaq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
