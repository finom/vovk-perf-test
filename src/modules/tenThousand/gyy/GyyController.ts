import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gyys")
export default class GyyController {
  @operation({
    summary: "Get Gyys",
  })
  @get()
  static getGyys = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gyy",
  })
  @post("{id}")
  static createGyy = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
