import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fgm")
export default class FgmController {
  @operation({
    summary: "Get Fgm",
  })
  @get()
  static getFgm = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fgm",
  })
  @post("{id}")
  static createFgm = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
