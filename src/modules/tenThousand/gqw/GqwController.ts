import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gqw")
export default class GqwController {
  @operation({
    summary: "Get Gqw",
  })
  @get()
  static getGqw = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gqw",
  })
  @post("{id}")
  static createGqw = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
