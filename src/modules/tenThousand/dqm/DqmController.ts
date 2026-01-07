import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dqm")
export default class DqmController {
  @operation({
    summary: "Get Dqm",
  })
  @get()
  static getDqm = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dqm",
  })
  @post("{id}")
  static createDqm = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
