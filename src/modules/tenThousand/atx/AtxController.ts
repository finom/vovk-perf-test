import { procedure, prefix, get, post, operation } from "vovk";

@prefix("atxes")
export default class AtxController {
  @operation({
    summary: "Get Atxes",
  })
  @get()
  static getAtxes = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Atx",
  })
  @post("{id}")
  static createAtx = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
