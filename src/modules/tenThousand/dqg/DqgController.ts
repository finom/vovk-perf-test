import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dqgs")
export default class DqgController {
  @operation({
    summary: "Get Dqgs",
  })
  @get()
  static getDqgs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dqg",
  })
  @post("{id}")
  static createDqg = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
