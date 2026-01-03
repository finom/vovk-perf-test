import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lbis")
export default class LbiController {
  @operation({
    summary: "Get Lbis",
  })
  @get()
  static getLbis = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lbi",
  })
  @post("{id}")
  static createLbi = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
