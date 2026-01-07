import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gyc")
export default class GycController {
  @operation({
    summary: "Get Gyc",
  })
  @get()
  static getGyc = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gyc",
  })
  @post("{id}")
  static createGyc = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
