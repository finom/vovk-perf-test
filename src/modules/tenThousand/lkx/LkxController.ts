import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lkxes")
export default class LkxController {
  @operation({
    summary: "Get Lkxes",
  })
  @get()
  static getLkxes = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lkx",
  })
  @post("{id}")
  static createLkx = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
