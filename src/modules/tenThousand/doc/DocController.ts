import { procedure, prefix, get, post, operation } from "vovk";

@prefix("doc")
export default class DocController {
  @operation({
    summary: "Get Doc",
  })
  @get()
  static getDoc = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Doc",
  })
  @post("{id}")
  static createDoc = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
