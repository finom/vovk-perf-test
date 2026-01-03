import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lnws")
export default class LnwController {
  @operation({
    summary: "Get Lnws",
  })
  @get()
  static getLnws = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lnw",
  })
  @post("{id}")
  static createLnw = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
