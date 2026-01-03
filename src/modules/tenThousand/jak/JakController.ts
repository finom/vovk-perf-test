import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jaks")
export default class JakController {
  @operation({
    summary: "Get Jaks",
  })
  @get()
  static getJaks = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jak",
  })
  @post("{id}")
  static createJak = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
