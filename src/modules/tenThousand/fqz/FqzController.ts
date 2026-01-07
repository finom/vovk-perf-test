import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fqz")
export default class FqzController {
  @operation({
    summary: "Get Fqz",
  })
  @get()
  static getFqz = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fqz",
  })
  @post("{id}")
  static createFqz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
