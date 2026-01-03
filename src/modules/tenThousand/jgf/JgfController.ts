import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jgfs")
export default class JgfController {
  @operation({
    summary: "Get Jgfs",
  })
  @get()
  static getJgfs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jgf",
  })
  @post("{id}")
  static createJgf = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
