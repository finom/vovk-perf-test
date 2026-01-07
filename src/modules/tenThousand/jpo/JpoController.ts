import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jpo")
export default class JpoController {
  @operation({
    summary: "Get Jpo",
  })
  @get()
  static getJpo = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jpo",
  })
  @post("{id}")
  static createJpo = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
