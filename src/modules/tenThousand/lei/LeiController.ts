import { procedure, prefix, get, post, operation } from "vovk";

@prefix("leis")
export default class LeiController {
  @operation({
    summary: "Get Leis",
  })
  @get()
  static getLeis = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lei",
  })
  @post("{id}")
  static createLei = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
