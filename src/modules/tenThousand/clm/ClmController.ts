import { procedure, prefix, get, post, operation } from "vovk";

@prefix("clm")
export default class ClmController {
  @operation({
    summary: "Get Clm",
  })
  @get()
  static getClm = procedure({
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
