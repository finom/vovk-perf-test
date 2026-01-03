import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fqfs")
export default class FqfController {
  @operation({
    summary: "Get Fqfs",
  })
  @get()
  static getFqfs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fqf",
  })
  @post("{id}")
  static createFqf = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
