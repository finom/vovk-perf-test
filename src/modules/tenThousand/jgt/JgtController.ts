import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jgts")
export default class JgtController {
  @operation({
    summary: "Get Jgts",
  })
  @get()
  static getJgts = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jgt",
  })
  @post("{id}")
  static createJgt = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
