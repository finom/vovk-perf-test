import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ntjs")
export default class NtjController {
  @operation({
    summary: "Get Ntjs",
  })
  @get()
  static getNtjs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ntj",
  })
  @post("{id}")
  static createNtj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
