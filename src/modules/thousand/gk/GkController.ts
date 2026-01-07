import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gk")
export default class GkController {
  @operation({
    summary: "Get Gk",
  })
  @get()
  static getGk = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gk",
  })
  @post("{id}")
  static createGk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
