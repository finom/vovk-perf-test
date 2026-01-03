import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mzws")
export default class MzwController {
  @operation({
    summary: "Get Mzws",
  })
  @get()
  static getMzws = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mzw",
  })
  @post("{id}")
  static createMzw = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
