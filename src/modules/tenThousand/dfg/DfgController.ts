import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dfg")
export default class DfgController {
  @operation({
    summary: "Get Dfg",
  })
  @get()
  static getDfg = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dfg",
  })
  @post("{id}")
  static createDfg = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
