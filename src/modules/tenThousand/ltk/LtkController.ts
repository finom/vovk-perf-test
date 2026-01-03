import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ltks")
export default class LtkController {
  @operation({
    summary: "Get Ltks",
  })
  @get()
  static getLtks = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ltk",
  })
  @post("{id}")
  static createLtk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
