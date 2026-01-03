import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hgks")
export default class HgkController {
  @operation({
    summary: "Get Hgks",
  })
  @get()
  static getHgks = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hgk",
  })
  @post("{id}")
  static createHgk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
