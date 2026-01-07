import { procedure, prefix, get, post, operation } from "vovk";

@prefix("njb")
export default class NjbController {
  @operation({
    summary: "Get Njb",
  })
  @get()
  static getNjb = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Njb",
  })
  @post("{id}")
  static createNjb = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
