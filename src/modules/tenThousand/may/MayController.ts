import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mays")
export default class MayController {
  @operation({
    summary: "Get Mays",
  })
  @get()
  static getMays = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create May",
  })
  @post("{id}")
  static createMay = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
