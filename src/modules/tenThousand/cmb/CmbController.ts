import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cmbs")
export default class CmbController {
  @operation({
    summary: "Get Cmbs",
  })
  @get()
  static getCmbs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cmb",
  })
  @post("{id}")
  static createCmb = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
