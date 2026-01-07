import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gyp")
export default class GypController {
  @operation({
    summary: "Get Gyp",
  })
  @get()
  static getGyp = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gyp",
  })
  @post("{id}")
  static createGyp = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
