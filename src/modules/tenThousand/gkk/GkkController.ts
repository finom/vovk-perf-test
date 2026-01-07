import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gkk")
export default class GkkController {
  @operation({
    summary: "Get Gkk",
  })
  @get()
  static getGkk = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gkk",
  })
  @post("{id}")
  static createGkk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
