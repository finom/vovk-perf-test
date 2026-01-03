import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hmms")
export default class HmmController {
  @operation({
    summary: "Get Hmms",
  })
  @get()
  static getHmms = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hmm",
  })
  @post("{id}")
  static createHmm = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
