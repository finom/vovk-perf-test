import { procedure, prefix, get, post, operation } from "vovk";

@prefix("goq")
export default class GoqController {
  @operation({
    summary: "Get Goq",
  })
  @get()
  static getGoq = procedure({
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
