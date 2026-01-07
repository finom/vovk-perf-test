import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hhv")
export default class HhvController {
  @operation({
    summary: "Get Hhv",
  })
  @get()
  static getHhv = procedure({
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
