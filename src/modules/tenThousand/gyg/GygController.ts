import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gyg")
export default class GygController {
  @operation({
    summary: "Get Gyg",
  })
  @get()
  static getGyg = procedure({
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
