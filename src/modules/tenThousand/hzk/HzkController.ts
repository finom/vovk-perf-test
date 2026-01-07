import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hzk")
export default class HzkController {
  @operation({
    summary: "Get Hzk",
  })
  @get()
  static getHzk = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hzk",
  })
  @post("{id}")
  static createHzk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
