import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gqhs")
export default class GqhController {
  @operation({
    summary: "Get Gqhs",
  })
  @get()
  static getGqhs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gqh",
  })
  @post("{id}")
  static createGqh = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
