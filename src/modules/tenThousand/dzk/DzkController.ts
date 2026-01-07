import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dzk")
export default class DzkController {
  @operation({
    summary: "Get Dzk",
  })
  @get()
  static getDzk = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dzk",
  })
  @post("{id}")
  static createDzk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
