import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cwis")
export default class CwiController {
  @operation({
    summary: "Get Cwis",
  })
  @get()
  static getCwis = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cwi",
  })
  @post("{id}")
  static createCwi = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
