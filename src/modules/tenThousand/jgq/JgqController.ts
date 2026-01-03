import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jgqs")
export default class JgqController {
  @operation({
    summary: "Get Jgqs",
  })
  @get()
  static getJgqs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jgq",
  })
  @post("{id}")
  static createJgq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
