import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dfb")
export default class DfbController {
  @operation({
    summary: "Get Dfb",
  })
  @get()
  static getDfb = procedure({
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
