import { procedure, prefix, get, post, operation } from "vovk";

@prefix("czk")
export default class CzkController {
  @operation({
    summary: "Get Czk",
  })
  @get()
  static getCzk = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Czk",
  })
  @post("{id}")
  static createCzk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
