import { procedure, prefix, get, post, operation } from "vovk";

@prefix("il")
export default class IlController {
  @operation({
    summary: "Get Il",
  })
  @get()
  static getIl = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Il",
  })
  @post("{id}")
  static createIl = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
