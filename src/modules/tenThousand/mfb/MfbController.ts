import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mfbs")
export default class MfbController {
  @operation({
    summary: "Get Mfbs",
  })
  @get()
  static getMfbs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mfb",
  })
  @post("{id}")
  static createMfb = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
