import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mpz")
export default class MpzController {
  @operation({
    summary: "Get Mpz",
  })
  @get()
  static getMpz = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mpz",
  })
  @post("{id}")
  static createMpz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
