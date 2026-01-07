import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lc")
export default class LcController {
  @operation({
    summary: "Get Lc",
  })
  @get()
  static getLc = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lc",
  })
  @post("{id}")
  static createLc = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
