import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cot")
export default class CotController {
  @operation({
    summary: "Get Cot",
  })
  @get()
  static getCot = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cot",
  })
  @post("{id}")
  static createCot = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
