import { procedure, prefix, get, post, operation } from "vovk";

@prefix("op")
export default class OpController {
  @operation({
    summary: "Get Op",
  })
  @get()
  static getOp = procedure({
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
