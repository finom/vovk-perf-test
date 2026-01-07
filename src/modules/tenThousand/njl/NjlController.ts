import { procedure, prefix, get, post, operation } from "vovk";

@prefix("njl")
export default class NjlController {
  @operation({
    summary: "Get Njl",
  })
  @get()
  static getNjl = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Njl",
  })
  @post("{id}")
  static createNjl = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
