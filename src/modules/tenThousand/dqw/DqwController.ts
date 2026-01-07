import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dqw")
export default class DqwController {
  @operation({
    summary: "Get Dqw",
  })
  @get()
  static getDqw = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dqw",
  })
  @post("{id}")
  static createDqw = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
