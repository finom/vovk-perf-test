import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mzks")
export default class MzkController {
  @operation({
    summary: "Get Mzks",
  })
  @get()
  static getMzks = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mzk",
  })
  @post("{id}")
  static createMzk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
