import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mevs")
export default class MevController {
  @operation({
    summary: "Get Mevs",
  })
  @get()
  static getMevs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mev",
  })
  @post("{id}")
  static createMev = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
