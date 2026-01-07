import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ehk")
export default class EhkController {
  @operation({
    summary: "Get Ehk",
  })
  @get()
  static getEhk = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ehk",
  })
  @post("{id}")
  static createEhk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
