import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ihjs")
export default class IhjController {
  @operation({
    summary: "Get Ihjs",
  })
  @get()
  static getIhjs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ihj",
  })
  @post("{id}")
  static createIhj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
