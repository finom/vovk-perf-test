import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bor")
export default class BorController {
  @operation({
    summary: "Get Bor",
  })
  @get()
  static getBor = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bor",
  })
  @post("{id}")
  static createBor = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
