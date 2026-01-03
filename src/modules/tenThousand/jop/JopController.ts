import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jops")
export default class JopController {
  @operation({
    summary: "Get Jops",
  })
  @get()
  static getJops = procedure({
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
