import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bors")
export default class BorController {
  @operation({
    summary: "Get Bors",
  })
  @get()
  static getBors = procedure({
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
