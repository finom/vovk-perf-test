import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mfq")
export default class MfqController {
  @operation({
    summary: "Get Mfq",
  })
  @get()
  static getMfq = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mfq",
  })
  @post("{id}")
  static createMfq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
