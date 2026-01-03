import { procedure, prefix, get, post, operation } from "vovk";

@prefix("caes")
export default class CaeController {
  @operation({
    summary: "Get Caes",
  })
  @get()
  static getCaes = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cae",
  })
  @post("{id}")
  static createCae = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
