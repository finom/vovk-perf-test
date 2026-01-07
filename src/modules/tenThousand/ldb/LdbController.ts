import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ldb")
export default class LdbController {
  @operation({
    summary: "Get Ldb",
  })
  @get()
  static getLdb = procedure({
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
