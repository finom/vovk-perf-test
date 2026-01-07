import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bmb")
export default class BmbController {
  @operation({
    summary: "Get Bmb",
  })
  @get()
  static getBmb = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bmb",
  })
  @post("{id}")
  static createBmb = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
