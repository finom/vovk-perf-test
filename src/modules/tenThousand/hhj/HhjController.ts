import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hhjs")
export default class HhjController {
  @operation({
    summary: "Get Hhjs",
  })
  @get()
  static getHhjs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hhj",
  })
  @post("{id}")
  static createHhj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
