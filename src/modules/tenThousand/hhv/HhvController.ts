import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hhvs")
export default class HhvController {
  @operation({
    summary: "Get Hhvs",
  })
  @get()
  static getHhvs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hhv",
  })
  @post("{id}")
  static createHhv = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
