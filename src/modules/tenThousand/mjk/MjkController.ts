import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mjk")
export default class MjkController {
  @operation({
    summary: "Get Mjk",
  })
  @get()
  static getMjk = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mjk",
  })
  @post("{id}")
  static createMjk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
