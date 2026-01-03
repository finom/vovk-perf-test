import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ciws")
export default class CiwController {
  @operation({
    summary: "Get Ciws",
  })
  @get()
  static getCiws = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ciw",
  })
  @post("{id}")
  static createCiw = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
