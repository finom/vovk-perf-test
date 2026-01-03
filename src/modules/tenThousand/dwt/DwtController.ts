import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dwts")
export default class DwtController {
  @operation({
    summary: "Get Dwts",
  })
  @get()
  static getDwts = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dwt",
  })
  @post("{id}")
  static createDwt = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
