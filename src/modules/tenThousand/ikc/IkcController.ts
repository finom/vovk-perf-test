import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ikc")
export default class IkcController {
  @operation({
    summary: "Get Ikc",
  })
  @get()
  static getIkc = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ikc",
  })
  @post("{id}")
  static createIkc = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
