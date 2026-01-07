import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hll")
export default class HllController {
  @operation({
    summary: "Get Hll",
  })
  @get()
  static getHll = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hll",
  })
  @post("{id}")
  static createHll = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
