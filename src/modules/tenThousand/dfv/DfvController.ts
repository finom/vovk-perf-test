import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dfvs")
export default class DfvController {
  @operation({
    summary: "Get Dfvs",
  })
  @get()
  static getDfvs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dfv",
  })
  @post("{id}")
  static createDfv = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
