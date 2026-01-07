import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lwk")
export default class LwkController {
  @operation({
    summary: "Get Lwk",
  })
  @get()
  static getLwk = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lwk",
  })
  @post("{id}")
  static createLwk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
