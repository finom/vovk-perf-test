import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ijks")
export default class IjkController {
  @operation({
    summary: "Get Ijks",
  })
  @get()
  static getIjks = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ijk",
  })
  @post("{id}")
  static createIjk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
