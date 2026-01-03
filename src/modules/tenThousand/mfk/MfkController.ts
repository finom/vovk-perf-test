import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mfks")
export default class MfkController {
  @operation({
    summary: "Get Mfks",
  })
  @get()
  static getMfks = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mfk",
  })
  @post("{id}")
  static createMfk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
