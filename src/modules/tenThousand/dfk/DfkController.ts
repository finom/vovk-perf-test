import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dfks")
export default class DfkController {
  @operation({
    summary: "Get Dfks",
  })
  @get()
  static getDfks = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dfk",
  })
  @post("{id}")
  static createDfk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
