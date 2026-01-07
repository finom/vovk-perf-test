import { procedure, prefix, get, post, operation } from "vovk";

@prefix("caq")
export default class CaqController {
  @operation({
    summary: "Get Caq",
  })
  @get()
  static getCaq = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Caq",
  })
  @post("{id}")
  static createCaq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
