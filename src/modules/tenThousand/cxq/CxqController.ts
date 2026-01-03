import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cxqs")
export default class CxqController {
  @operation({
    summary: "Get Cxqs",
  })
  @get()
  static getCxqs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cxq",
  })
  @post("{id}")
  static createCxq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
