import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ffis")
export default class FfiController {
  @operation({
    summary: "Get Ffis",
  })
  @get()
  static getFfis = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ffi",
  })
  @post("{id}")
  static createFfi = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
