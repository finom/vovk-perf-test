import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fq")
export default class FqController {
  @operation({
    summary: "Get Fq",
  })
  @get()
  static getFq = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fq",
  })
  @post("{id}")
  static createFq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
