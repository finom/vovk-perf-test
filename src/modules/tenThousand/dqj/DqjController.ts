import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dqjs")
export default class DqjController {
  @operation({
    summary: "Get Dqjs",
  })
  @get()
  static getDqjs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dqj",
  })
  @post("{id}")
  static createDqj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
