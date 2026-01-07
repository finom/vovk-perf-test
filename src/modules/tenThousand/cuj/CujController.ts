import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cuj")
export default class CujController {
  @operation({
    summary: "Get Cuj",
  })
  @get()
  static getCuj = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cuj",
  })
  @post("{id}")
  static createCuj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
