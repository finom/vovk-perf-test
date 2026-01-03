import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mfvs")
export default class MfvController {
  @operation({
    summary: "Get Mfvs",
  })
  @get()
  static getMfvs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mfv",
  })
  @post("{id}")
  static createMfv = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
