import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gdjs")
export default class GdjController {
  @operation({
    summary: "Get Gdjs",
  })
  @get()
  static getGdjs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gdj",
  })
  @post("{id}")
  static createGdj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
