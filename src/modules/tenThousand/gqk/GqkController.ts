import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gqks")
export default class GqkController {
  @operation({
    summary: "Get Gqks",
  })
  @get()
  static getGqks = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gqk",
  })
  @post("{id}")
  static createGqk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
