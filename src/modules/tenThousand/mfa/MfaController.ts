import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mfas")
export default class MfaController {
  @operation({
    summary: "Get Mfas",
  })
  @get()
  static getMfas = procedure({
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
