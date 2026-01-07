import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dqh")
export default class DqhController {
  @operation({
    summary: "Get Dqh",
  })
  @get()
  static getDqh = procedure({
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
