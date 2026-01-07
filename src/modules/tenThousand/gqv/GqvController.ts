import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gqv")
export default class GqvController {
  @operation({
    summary: "Get Gqv",
  })
  @get()
  static getGqv = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gqv",
  })
  @post("{id}")
  static createGqv = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
