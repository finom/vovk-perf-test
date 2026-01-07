import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jrc")
export default class JrcController {
  @operation({
    summary: "Get Jrc",
  })
  @get()
  static getJrc = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jrc",
  })
  @post("{id}")
  static createJrc = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
