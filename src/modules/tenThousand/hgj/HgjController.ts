import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hgjs")
export default class HgjController {
  @operation({
    summary: "Get Hgjs",
  })
  @get()
  static getHgjs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hgj",
  })
  @post("{id}")
  static createHgj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
