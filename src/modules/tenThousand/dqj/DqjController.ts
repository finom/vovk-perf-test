import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dqj")
export default class DqjController {
  @operation({
    summary: "Get Dqj",
  })
  @get()
  static getDqj = procedure({
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
