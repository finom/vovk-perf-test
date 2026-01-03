import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ops")
export default class OpController {
  @operation({
    summary: "Get Ops",
  })
  @get()
  static getOps = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Op",
  })
  @post("{id}")
  static createOp = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
