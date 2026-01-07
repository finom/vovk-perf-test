import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lhr")
export default class LhrController {
  @operation({
    summary: "Get Lhr",
  })
  @get()
  static getLhr = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lhr",
  })
  @post("{id}")
  static createLhr = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
