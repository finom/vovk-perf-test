import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iwk")
export default class IwkController {
  @operation({
    summary: "Get Iwk",
  })
  @get()
  static getIwk = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Iwk",
  })
  @post("{id}")
  static createIwk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
