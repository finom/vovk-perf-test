import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gygs")
export default class GygController {
  @operation({
    summary: "Get Gygs",
  })
  @get()
  static getGygs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gyg",
  })
  @post("{id}")
  static createGyg = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
