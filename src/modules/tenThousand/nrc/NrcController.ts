import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nrc")
export default class NrcController {
  @operation({
    summary: "Get Nrc",
  })
  @get()
  static getNrc = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nrc",
  })
  @post("{id}")
  static createNrc = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
