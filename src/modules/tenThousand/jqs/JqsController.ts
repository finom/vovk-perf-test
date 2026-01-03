import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jqs")
export default class JqsController {
  @operation({
    summary: "Get Jqs",
  })
  @get()
  static getJqs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jqs",
  })
  @post("{id}")
  static createJqs = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
