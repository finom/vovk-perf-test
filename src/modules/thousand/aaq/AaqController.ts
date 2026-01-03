import { procedure, prefix, get, post, operation } from "vovk";

@prefix("aaqs")
export default class AaqController {
  @operation({
    summary: "Get Aaqs",
  })
  @get()
  static getAaqs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Aaq",
  })
  @post("{id}")
  static createAaq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
