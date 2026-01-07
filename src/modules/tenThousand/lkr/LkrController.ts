import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lkr")
export default class LkrController {
  @operation({
    summary: "Get Lkr",
  })
  @get()
  static getLkr = procedure({
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
