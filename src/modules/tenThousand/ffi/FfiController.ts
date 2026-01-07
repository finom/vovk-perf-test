import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ffi")
export default class FfiController {
  @operation({
    summary: "Get Ffi",
  })
  @get()
  static getFfi = procedure({
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
