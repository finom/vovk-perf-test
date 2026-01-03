import { procedure, prefix, get, post, operation } from "vovk";

@prefix("clms")
export default class ClmController {
  @operation({
    summary: "Get Clms",
  })
  @get()
  static getClms = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Clm",
  })
  @post("{id}")
  static createClm = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
