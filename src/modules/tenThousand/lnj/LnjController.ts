import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lnj")
export default class LnjController {
  @operation({
    summary: "Get Lnj",
  })
  @get()
  static getLnj = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lnj",
  })
  @post("{id}")
  static createLnj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
