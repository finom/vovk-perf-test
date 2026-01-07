import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fp")
export default class FpController {
  @operation({
    summary: "Get Fp",
  })
  @get()
  static getFp = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fp",
  })
  @post("{id}")
  static createFp = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
