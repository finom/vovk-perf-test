import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eaqs")
export default class EaqController {
  @operation({
    summary: "Get Eaqs",
  })
  @get()
  static getEaqs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Eaq",
  })
  @post("{id}")
  static createEaq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
