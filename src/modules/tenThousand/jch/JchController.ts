import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jches")
export default class JchController {
  @operation({
    summary: "Get Jches",
  })
  @get()
  static getJches = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jch",
  })
  @post("{id}")
  static createJch = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
