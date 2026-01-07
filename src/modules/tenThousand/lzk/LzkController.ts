import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lzk")
export default class LzkController {
  @operation({
    summary: "Get Lzk",
  })
  @get()
  static getLzk = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lzk",
  })
  @post("{id}")
  static createLzk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
