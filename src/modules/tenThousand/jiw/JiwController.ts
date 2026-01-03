import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jiws")
export default class JiwController {
  @operation({
    summary: "Get Jiws",
  })
  @get()
  static getJiws = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jiw",
  })
  @post("{id}")
  static createJiw = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
