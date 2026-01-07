import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gdh")
export default class GdhController {
  @operation({
    summary: "Get Gdh",
  })
  @get()
  static getGdh = procedure({
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
