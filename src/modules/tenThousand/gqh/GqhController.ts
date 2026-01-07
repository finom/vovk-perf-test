import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gqh")
export default class GqhController {
  @operation({
    summary: "Get Gqh",
  })
  @get()
  static getGqh = procedure({
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
