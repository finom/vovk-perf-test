import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bgqs")
export default class BgqController {
  @operation({
    summary: "Get Bgqs",
  })
  @get()
  static getBgqs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bgq",
  })
  @post("{id}")
  static createBgq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
