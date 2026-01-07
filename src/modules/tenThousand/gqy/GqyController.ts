import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gqy")
export default class GqyController {
  @operation({
    summary: "Get Gqy",
  })
  @get()
  static getGqy = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gqy",
  })
  @post("{id}")
  static createGqy = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
