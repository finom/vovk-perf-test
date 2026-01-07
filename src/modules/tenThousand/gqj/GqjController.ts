import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gqj")
export default class GqjController {
  @operation({
    summary: "Get Gqj",
  })
  @get()
  static getGqj = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gqj",
  })
  @post("{id}")
  static createGqj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
