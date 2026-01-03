import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ldbs")
export default class LdbController {
  @operation({
    summary: "Get Ldbs",
  })
  @get()
  static getLdbs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ldb",
  })
  @post("{id}")
  static createLdb = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
