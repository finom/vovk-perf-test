import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bky")
export default class BkyController {
  @operation({
    summary: "Get Bky",
  })
  @get()
  static getBky = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bky",
  })
  @post("{id}")
  static createBky = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
