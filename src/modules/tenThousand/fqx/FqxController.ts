import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fqxes")
export default class FqxController {
  @operation({
    summary: "Get Fqxes",
  })
  @get()
  static getFqxes = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fqx",
  })
  @post("{id}")
  static createFqx = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
