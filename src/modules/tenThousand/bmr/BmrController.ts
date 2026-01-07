import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bmr")
export default class BmrController {
  @operation({
    summary: "Get Bmr",
  })
  @get()
  static getBmr = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bmr",
  })
  @post("{id}")
  static createBmr = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
