import { procedure, prefix, get, post, operation } from "vovk";

@prefix("afls")
export default class AflController {
  @operation({
    summary: "Get Afls",
  })
  @get()
  static getAfls = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Afl",
  })
  @post("{id}")
  static createAfl = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
