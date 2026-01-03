import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jgds")
export default class JgdController {
  @operation({
    summary: "Get Jgds",
  })
  @get()
  static getJgds = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jgd",
  })
  @post("{id}")
  static createJgd = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
