import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gqgs")
export default class GqgController {
  @operation({
    summary: "Get Gqgs",
  })
  @get()
  static getGqgs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gqg",
  })
  @post("{id}")
  static createGqg = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
