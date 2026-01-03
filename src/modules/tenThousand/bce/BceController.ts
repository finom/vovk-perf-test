import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bces")
export default class BceController {
  @operation({
    summary: "Get Bces",
  })
  @get()
  static getBces = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bce",
  })
  @post("{id}")
  static createBce = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
