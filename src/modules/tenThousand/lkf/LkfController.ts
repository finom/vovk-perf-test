import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lkfs")
export default class LkfController {
  @operation({
    summary: "Get Lkfs",
  })
  @get()
  static getLkfs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lkf",
  })
  @post("{id}")
  static createLkf = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
