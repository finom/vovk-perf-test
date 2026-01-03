import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dqms")
export default class DqmController {
  @operation({
    summary: "Get Dqms",
  })
  @get()
  static getDqms = procedure({
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
