import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nk")
export default class NkController {
  @operation({
    summary: "Get Nk",
  })
  @get()
  static getNk = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nk",
  })
  @post("{id}")
  static createNk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
