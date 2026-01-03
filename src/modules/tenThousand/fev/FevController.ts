import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fevs")
export default class FevController {
  @operation({
    summary: "Get Fevs",
  })
  @get()
  static getFevs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fev",
  })
  @post("{id}")
  static createFev = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
