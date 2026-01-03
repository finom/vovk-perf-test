import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cwies")
export default class CwyController {
  @operation({
    summary: "Get Cwies",
  })
  @get()
  static getCwies = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cwy",
  })
  @post("{id}")
  static createCwy = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
