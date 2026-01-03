import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fqcs")
export default class FqcController {
  @operation({
    summary: "Get Fqcs",
  })
  @get()
  static getFqcs = procedure({
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
