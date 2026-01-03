import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ccs")
export default class CcsController {
  @operation({
    summary: "Get Ccs",
  })
  @get()
  static getCcs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ccs",
  })
  @post("{id}")
  static createCcs = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
