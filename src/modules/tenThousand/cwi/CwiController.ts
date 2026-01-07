import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cwi")
export default class CwiController {
  @operation({
    summary: "Get Cwi",
  })
  @get()
  static getCwi = procedure({
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
