import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hbb")
export default class HbbController {
  @operation({
    summary: "Get Hbb",
  })
  @get()
  static getHbb = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hbb",
  })
  @post("{id}")
  static createHbb = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
