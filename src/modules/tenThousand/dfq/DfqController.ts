import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dfqs")
export default class DfqController {
  @operation({
    summary: "Get Dfqs",
  })
  @get()
  static getDfqs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dfq",
  })
  @post("{id}")
  static createDfq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
