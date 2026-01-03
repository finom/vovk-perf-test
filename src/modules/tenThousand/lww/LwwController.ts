import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lwws")
export default class LwwController {
  @operation({
    summary: "Get Lwws",
  })
  @get()
  static getLwws = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lww",
  })
  @post("{id}")
  static createLww = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
