import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fgms")
export default class FgmController {
  @operation({
    summary: "Get Fgms",
  })
  @get()
  static getFgms = procedure({
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
