import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lhzs")
export default class LhzController {
  @operation({
    summary: "Get Lhzs",
  })
  @get()
  static getLhzs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lhz",
  })
  @post("{id}")
  static createLhz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
