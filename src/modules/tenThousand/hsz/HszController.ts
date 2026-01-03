import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hszs")
export default class HszController {
  @operation({
    summary: "Get Hszs",
  })
  @get()
  static getHszs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hsz",
  })
  @post("{id}")
  static createHsz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
