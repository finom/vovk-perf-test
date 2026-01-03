import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fdds")
export default class FddController {
  @operation({
    summary: "Get Fdds",
  })
  @get()
  static getFdds = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fdd",
  })
  @post("{id}")
  static createFdd = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
