import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lkks")
export default class LkkController {
  @operation({
    summary: "Get Lkks",
  })
  @get()
  static getLkks = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lkk",
  })
  @post("{id}")
  static createLkk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
