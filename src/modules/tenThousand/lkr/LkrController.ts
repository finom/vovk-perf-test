import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lkrs")
export default class LkrController {
  @operation({
    summary: "Get Lkrs",
  })
  @get()
  static getLkrs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lkr",
  })
  @post("{id}")
  static createLkr = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
