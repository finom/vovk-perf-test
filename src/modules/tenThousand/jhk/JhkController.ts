import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jhks")
export default class JhkController {
  @operation({
    summary: "Get Jhks",
  })
  @get()
  static getJhks = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jhk",
  })
  @post("{id}")
  static createJhk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
