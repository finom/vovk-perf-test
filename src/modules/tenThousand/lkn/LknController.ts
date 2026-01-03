import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lkns")
export default class LknController {
  @operation({
    summary: "Get Lkns",
  })
  @get()
  static getLkns = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lkn",
  })
  @post("{id}")
  static createLkn = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
