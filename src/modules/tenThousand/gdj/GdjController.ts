import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gdj")
export default class GdjController {
  @operation({
    summary: "Get Gdj",
  })
  @get()
  static getGdj = procedure({
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
