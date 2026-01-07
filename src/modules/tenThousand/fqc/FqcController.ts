import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fqc")
export default class FqcController {
  @operation({
    summary: "Get Fqc",
  })
  @get()
  static getFqc = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fqc",
  })
  @post("{id}")
  static createFqc = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
