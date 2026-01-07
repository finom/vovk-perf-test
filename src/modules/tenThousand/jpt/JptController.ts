import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jpt")
export default class JptController {
  @operation({
    summary: "Get Jpt",
  })
  @get()
  static getJpt = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jpt",
  })
  @post("{id}")
  static createJpt = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
