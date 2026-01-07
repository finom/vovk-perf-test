import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cbz")
export default class CbzController {
  @operation({
    summary: "Get Cbz",
  })
  @get()
  static getCbz = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cbz",
  })
  @post("{id}")
  static createCbz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
