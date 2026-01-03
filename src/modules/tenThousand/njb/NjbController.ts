import { procedure, prefix, get, post, operation } from "vovk";

@prefix("njbs")
export default class NjbController {
  @operation({
    summary: "Get Njbs",
  })
  @get()
  static getNjbs = procedure({
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
