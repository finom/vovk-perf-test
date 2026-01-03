import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gqms")
export default class GqmController {
  @operation({
    summary: "Get Gqms",
  })
  @get()
  static getGqms = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gqm",
  })
  @post("{id}")
  static createGqm = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
