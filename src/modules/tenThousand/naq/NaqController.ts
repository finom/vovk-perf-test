import { procedure, prefix, get, post, operation } from "vovk";

@prefix("naq")
export default class NaqController {
  @operation({
    summary: "Get Naq",
  })
  @get()
  static getNaq = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Naq",
  })
  @post("{id}")
  static createNaq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
