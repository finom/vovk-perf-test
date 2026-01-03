import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bvies")
export default class BvyController {
  @operation({
    summary: "Get Bvies",
  })
  @get()
  static getBvies = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bvy",
  })
  @post("{id}")
  static createBvy = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
