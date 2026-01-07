import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bur")
export default class BurController {
  @operation({
    summary: "Get Bur",
  })
  @get()
  static getBur = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bur",
  })
  @post("{id}")
  static createBur = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
