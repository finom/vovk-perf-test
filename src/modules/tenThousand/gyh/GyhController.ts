import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gyhs")
export default class GyhController {
  @operation({
    summary: "Get Gyhs",
  })
  @get()
  static getGyhs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gyh",
  })
  @post("{id}")
  static createGyh = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
