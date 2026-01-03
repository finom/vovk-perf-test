import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lhrs")
export default class LhrController {
  @operation({
    summary: "Get Lhrs",
  })
  @get()
  static getLhrs = procedure({
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
