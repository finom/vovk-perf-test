import { procedure, prefix, get, post, operation } from "vovk";

@prefix("elm")
export default class ElmController {
  @operation({
    summary: "Get Elm",
  })
  @get()
  static getElm = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Elm",
  })
  @post("{id}")
  static createElm = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
