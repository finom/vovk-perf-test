import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ldis")
export default class LdiController {
  @operation({
    summary: "Get Ldis",
  })
  @get()
  static getLdis = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ldi",
  })
  @post("{id}")
  static createLdi = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
