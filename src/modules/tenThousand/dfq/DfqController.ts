import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dfq")
export default class DfqController {
  @operation({
    summary: "Get Dfq",
  })
  @get()
  static getDfq = procedure({
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
