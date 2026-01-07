import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hyp")
export default class HypController {
  @operation({
    summary: "Get Hyp",
  })
  @get()
  static getHyp = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hyp",
  })
  @post("{id}")
  static createHyp = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
