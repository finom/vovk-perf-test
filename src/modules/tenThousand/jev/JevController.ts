import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jevs")
export default class JevController {
  @operation({
    summary: "Get Jevs",
  })
  @get()
  static getJevs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jev",
  })
  @post("{id}")
  static createJev = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
