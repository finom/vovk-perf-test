import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gyh")
export default class GyhController {
  @operation({
    summary: "Get Gyh",
  })
  @get()
  static getGyh = procedure({
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
