import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gjk")
export default class GjkController {
  @operation({
    summary: "Get Gjk",
  })
  @get()
  static getGjk = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gjk",
  })
  @post("{id}")
  static createGjk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
