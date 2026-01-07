import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cce")
export default class CceController {
  @operation({
    summary: "Get Cce",
  })
  @get()
  static getCce = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cce",
  })
  @post("{id}")
  static createCce = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
