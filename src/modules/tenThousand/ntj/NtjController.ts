import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ntj")
export default class NtjController {
  @operation({
    summary: "Get Ntj",
  })
  @get()
  static getNtj = procedure({
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
