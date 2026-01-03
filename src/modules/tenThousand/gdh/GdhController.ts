import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gdhs")
export default class GdhController {
  @operation({
    summary: "Get Gdhs",
  })
  @get()
  static getGdhs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gdh",
  })
  @post("{id}")
  static createGdh = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
