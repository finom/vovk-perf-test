import { procedure, prefix, get, post, operation } from "vovk";

@prefix("f")
export default class FController {
  @operation({
    summary: "Get F",
  })
  @get()
  static getF = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create F",
  })
  @post("{id}")
  static createF = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
