import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ffls")
export default class FflController {
  @operation({
    summary: "Get Ffls",
  })
  @get()
  static getFfls = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ffl",
  })
  @post("{id}")
  static createFfl = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
