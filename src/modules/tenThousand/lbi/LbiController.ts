import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lbi")
export default class LbiController {
  @operation({
    summary: "Get Lbi",
  })
  @get()
  static getLbi = procedure({
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
