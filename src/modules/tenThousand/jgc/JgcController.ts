import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jgcs")
export default class JgcController {
  @operation({
    summary: "Get Jgcs",
  })
  @get()
  static getJgcs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jgc",
  })
  @post("{id}")
  static createJgc = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
