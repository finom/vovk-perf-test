import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lgk")
export default class LgkController {
  @operation({
    summary: "Get Lgk",
  })
  @get()
  static getLgk = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lgk",
  })
  @post("{id}")
  static createLgk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
