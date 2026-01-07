import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dqv")
export default class DqvController {
  @operation({
    summary: "Get Dqv",
  })
  @get()
  static getDqv = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dqv",
  })
  @post("{id}")
  static createDqv = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
