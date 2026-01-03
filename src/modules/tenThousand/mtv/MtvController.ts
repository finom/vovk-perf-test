import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mtvs")
export default class MtvController {
  @operation({
    summary: "Get Mtvs",
  })
  @get()
  static getMtvs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mtv",
  })
  @post("{id}")
  static createMtv = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
