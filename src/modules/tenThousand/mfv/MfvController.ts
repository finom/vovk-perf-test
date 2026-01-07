import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mfv")
export default class MfvController {
  @operation({
    summary: "Get Mfv",
  })
  @get()
  static getMfv = procedure({
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
