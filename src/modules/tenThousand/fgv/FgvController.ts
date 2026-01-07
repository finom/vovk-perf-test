import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fgv")
export default class FgvController {
  @operation({
    summary: "Get Fgv",
  })
  @get()
  static getFgv = procedure({
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
