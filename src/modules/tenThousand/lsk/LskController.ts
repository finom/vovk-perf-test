import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lsks")
export default class LskController {
  @operation({
    summary: "Get Lsks",
  })
  @get()
  static getLsks = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lsk",
  })
  @post("{id}")
  static createLsk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
