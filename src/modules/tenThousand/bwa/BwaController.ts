import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bwas")
export default class BwaController {
  @operation({
    summary: "Get Bwas",
  })
  @get()
  static getBwas = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bwa",
  })
  @post("{id}")
  static createBwa = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
