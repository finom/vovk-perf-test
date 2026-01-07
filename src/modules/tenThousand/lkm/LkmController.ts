import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lkm")
export default class LkmController {
  @operation({
    summary: "Get Lkm",
  })
  @get()
  static getLkm = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lkm",
  })
  @post("{id}")
  static createLkm = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
