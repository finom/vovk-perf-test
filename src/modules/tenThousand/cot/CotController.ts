import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cots")
export default class CotController {
  @operation({
    summary: "Get Cots",
  })
  @get()
  static getCots = procedure({
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
