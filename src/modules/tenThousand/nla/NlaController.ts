import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nlas")
export default class NlaController {
  @operation({
    summary: "Get Nlas",
  })
  @get()
  static getNlas = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nla",
  })
  @post("{id}")
  static createNla = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
