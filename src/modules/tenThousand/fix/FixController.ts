import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fix")
export default class FixController {
  @operation({
    summary: "Get Fix",
  })
  @get()
  static getFix = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fix",
  })
  @post("{id}")
  static createFix = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
