import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nprs")
export default class NprController {
  @operation({
    summary: "Get Nprs",
  })
  @get()
  static getNprs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Npr",
  })
  @post("{id}")
  static createNpr = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
