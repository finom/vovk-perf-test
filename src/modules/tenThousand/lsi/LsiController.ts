import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lsis")
export default class LsiController {
  @operation({
    summary: "Get Lsis",
  })
  @get()
  static getLsis = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lsi",
  })
  @post("{id}")
  static createLsi = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
