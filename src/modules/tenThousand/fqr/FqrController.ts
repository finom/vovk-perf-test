import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fqrs")
export default class FqrController {
  @operation({
    summary: "Get Fqrs",
  })
  @get()
  static getFqrs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fqr",
  })
  @post("{id}")
  static createFqr = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
