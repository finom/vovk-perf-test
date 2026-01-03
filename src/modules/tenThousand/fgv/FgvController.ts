import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fgvs")
export default class FgvController {
  @operation({
    summary: "Get Fgvs",
  })
  @get()
  static getFgvs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fgv",
  })
  @post("{id}")
  static createFgv = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
