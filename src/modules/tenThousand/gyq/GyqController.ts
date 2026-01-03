import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gyqs")
export default class GyqController {
  @operation({
    summary: "Get Gyqs",
  })
  @get()
  static getGyqs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gyq",
  })
  @post("{id}")
  static createGyq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
