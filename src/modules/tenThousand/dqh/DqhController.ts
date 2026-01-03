import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dqhs")
export default class DqhController {
  @operation({
    summary: "Get Dqhs",
  })
  @get()
  static getDqhs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dqh",
  })
  @post("{id}")
  static createDqh = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
