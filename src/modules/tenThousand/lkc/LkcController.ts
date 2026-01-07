import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lkc")
export default class LkcController {
  @operation({
    summary: "Get Lkc",
  })
  @get()
  static getLkc = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lkc",
  })
  @post("{id}")
  static createLkc = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
