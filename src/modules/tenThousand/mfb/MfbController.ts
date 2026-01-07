import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mfb")
export default class MfbController {
  @operation({
    summary: "Get Mfb",
  })
  @get()
  static getMfb = procedure({
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
