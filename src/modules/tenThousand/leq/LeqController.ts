import { procedure, prefix, get, post, operation } from "vovk";

@prefix("leqs")
export default class LeqController {
  @operation({
    summary: "Get Leqs",
  })
  @get()
  static getLeqs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Leq",
  })
  @post("{id}")
  static createLeq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
