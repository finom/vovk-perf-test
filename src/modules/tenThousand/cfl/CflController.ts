import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cfls")
export default class CflController {
  @operation({
    summary: "Get Cfls",
  })
  @get()
  static getCfls = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cfl",
  })
  @post("{id}")
  static createCfl = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
