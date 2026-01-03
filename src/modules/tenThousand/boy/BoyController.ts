import { procedure, prefix, get, post, operation } from "vovk";

@prefix("boys")
export default class BoyController {
  @operation({
    summary: "Get Boys",
  })
  @get()
  static getBoys = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Boy",
  })
  @post("{id}")
  static createBoy = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
