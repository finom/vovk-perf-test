import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ewd")
export default class EwdController {
  @operation({
    summary: "Get Ewd",
  })
  @get()
  static getEwd = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ewd",
  })
  @post("{id}")
  static createEwd = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
