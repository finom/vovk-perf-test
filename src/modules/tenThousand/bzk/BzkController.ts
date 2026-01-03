import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bzks")
export default class BzkController {
  @operation({
    summary: "Get Bzks",
  })
  @get()
  static getBzks = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bzk",
  })
  @post("{id}")
  static createBzk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
