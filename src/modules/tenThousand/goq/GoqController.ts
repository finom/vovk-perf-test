import { procedure, prefix, get, post, operation } from "vovk";

@prefix("goqs")
export default class GoqController {
  @operation({
    summary: "Get Goqs",
  })
  @get()
  static getGoqs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Goq",
  })
  @post("{id}")
  static createGoq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
