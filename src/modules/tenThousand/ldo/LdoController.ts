import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ldo")
export default class LdoController {
  @operation({
    summary: "Get Ldo",
  })
  @get()
  static getLdo = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ldo",
  })
  @post("{id}")
  static createLdo = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
