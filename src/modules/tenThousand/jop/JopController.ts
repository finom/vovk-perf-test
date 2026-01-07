import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jop")
export default class JopController {
  @operation({
    summary: "Get Jop",
  })
  @get()
  static getJop = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jop",
  })
  @post("{id}")
  static createJop = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
