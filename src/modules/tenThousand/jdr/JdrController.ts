import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jdr")
export default class JdrController {
  @operation({
    summary: "Get Jdr",
  })
  @get()
  static getJdr = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jdr",
  })
  @post("{id}")
  static createJdr = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
