import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bevs")
export default class BevController {
  @operation({
    summary: "Get Bevs",
  })
  @get()
  static getBevs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bev",
  })
  @post("{id}")
  static createBev = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
