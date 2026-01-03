import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cwns")
export default class CwnController {
  @operation({
    summary: "Get Cwns",
  })
  @get()
  static getCwns = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cwn",
  })
  @post("{id}")
  static createCwn = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
