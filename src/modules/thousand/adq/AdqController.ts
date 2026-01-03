import { procedure, prefix, get, post, operation } from "vovk";

@prefix("adqs")
export default class AdqController {
  @operation({
    summary: "Get Adqs",
  })
  @get()
  static getAdqs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Adq",
  })
  @post("{id}")
  static createAdq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
