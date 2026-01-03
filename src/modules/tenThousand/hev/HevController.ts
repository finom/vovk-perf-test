import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hevs")
export default class HevController {
  @operation({
    summary: "Get Hevs",
  })
  @get()
  static getHevs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hev",
  })
  @post("{id}")
  static createHev = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
