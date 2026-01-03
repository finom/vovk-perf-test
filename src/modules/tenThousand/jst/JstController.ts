import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jsts")
export default class JstController {
  @operation({
    summary: "Get Jsts",
  })
  @get()
  static getJsts = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jst",
  })
  @post("{id}")
  static createJst = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
