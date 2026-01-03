import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ldcs")
export default class LdcController {
  @operation({
    summary: "Get Ldcs",
  })
  @get()
  static getLdcs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ldc",
  })
  @post("{id}")
  static createLdc = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
