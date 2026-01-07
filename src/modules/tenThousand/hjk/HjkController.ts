import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hjk")
export default class HjkController {
  @operation({
    summary: "Get Hjk",
  })
  @get()
  static getHjk = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hjk",
  })
  @post("{id}")
  static createHjk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
