import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dfbs")
export default class DfbController {
  @operation({
    summary: "Get Dfbs",
  })
  @get()
  static getDfbs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dfb",
  })
  @post("{id}")
  static createDfb = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
