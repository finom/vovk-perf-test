import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jgvs")
export default class JgvController {
  @operation({
    summary: "Get Jgvs",
  })
  @get()
  static getJgvs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jgv",
  })
  @post("{id}")
  static createJgv = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
