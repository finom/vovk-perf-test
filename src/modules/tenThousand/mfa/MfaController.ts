import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mfa")
export default class MfaController {
  @operation({
    summary: "Get Mfa",
  })
  @get()
  static getMfa = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mfa",
  })
  @post("{id}")
  static createMfa = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
