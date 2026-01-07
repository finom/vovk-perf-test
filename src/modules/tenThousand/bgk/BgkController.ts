import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bgk")
export default class BgkController {
  @operation({
    summary: "Get Bgk",
  })
  @get()
  static getBgk = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bgk",
  })
  @post("{id}")
  static createBgk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
