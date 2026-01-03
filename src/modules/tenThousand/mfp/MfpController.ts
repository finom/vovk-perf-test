import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mfps")
export default class MfpController {
  @operation({
    summary: "Get Mfps",
  })
  @get()
  static getMfps = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mfp",
  })
  @post("{id}")
  static createMfp = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
