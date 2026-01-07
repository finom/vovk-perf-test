import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lmt")
export default class LmtController {
  @operation({
    summary: "Get Lmt",
  })
  @get()
  static getLmt = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lmt",
  })
  @post("{id}")
  static createLmt = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
