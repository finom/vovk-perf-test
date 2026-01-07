import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cmb")
export default class CmbController {
  @operation({
    summary: "Get Cmb",
  })
  @get()
  static getCmb = procedure({
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
