import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cpg")
export default class CpgController {
  @operation({
    summary: "Get Cpg",
  })
  @get()
  static getCpg = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cpg",
  })
  @post("{id}")
  static createCpg = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
