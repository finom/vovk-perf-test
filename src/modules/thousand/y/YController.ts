import { procedure, prefix, get, post, operation } from "vovk";

@prefix("y")
export default class YController {
  @operation({
    summary: "Get Y",
  })
  @get()
  static getY = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Y",
  })
  @post("{id}")
  static createY = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
