import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dses")
export default class DseController {
  @operation({
    summary: "Get Dses",
  })
  @get()
  static getDses = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dse",
  })
  @post("{id}")
  static createDse = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
