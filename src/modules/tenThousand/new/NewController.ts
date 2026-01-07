import { procedure, prefix, get, post, operation } from "vovk";

@prefix("new")
export default class NewController {
  @operation({
    summary: "Get New",
  })
  @get()
  static getNew = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create New",
  })
  @post("{id}")
  static createNew = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
