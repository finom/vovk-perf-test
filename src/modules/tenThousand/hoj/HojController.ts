import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hojs")
export default class HojController {
  @operation({
    summary: "Get Hojs",
  })
  @get()
  static getHojs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hoj",
  })
  @post("{id}")
  static createHoj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
