import { procedure, prefix, get, post, operation } from "vovk";

@prefix("baqs")
export default class BaqController {
  @operation({
    summary: "Get Baqs",
  })
  @get()
  static getBaqs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Baq",
  })
  @post("{id}")
  static createBaq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
