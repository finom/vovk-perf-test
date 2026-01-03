import { procedure, prefix, get, post, operation } from "vovk";

@prefix("faps")
export default class FapController {
  @operation({
    summary: "Get Faps",
  })
  @get()
  static getFaps = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fap",
  })
  @post("{id}")
  static createFap = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
