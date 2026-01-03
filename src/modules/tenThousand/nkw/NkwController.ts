import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nkws")
export default class NkwController {
  @operation({
    summary: "Get Nkws",
  })
  @get()
  static getNkws = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nkw",
  })
  @post("{id}")
  static createNkw = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
