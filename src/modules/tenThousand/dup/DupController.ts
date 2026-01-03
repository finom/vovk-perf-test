import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dups")
export default class DupController {
  @operation({
    summary: "Get Dups",
  })
  @get()
  static getDups = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dup",
  })
  @post("{id}")
  static createDup = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
