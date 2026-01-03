import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iaqs")
export default class IaqController {
  @operation({
    summary: "Get Iaqs",
  })
  @get()
  static getIaqs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Iaq",
  })
  @post("{id}")
  static createIaq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
