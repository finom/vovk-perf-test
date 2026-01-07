import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lkb")
export default class LkbController {
  @operation({
    summary: "Get Lkb",
  })
  @get()
  static getLkb = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lkb",
  })
  @post("{id}")
  static createLkb = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
