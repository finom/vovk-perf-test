import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lhz")
export default class LhzController {
  @operation({
    summary: "Get Lhz",
  })
  @get()
  static getLhz = procedure({
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
