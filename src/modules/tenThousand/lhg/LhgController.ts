import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lhgs")
export default class LhgController {
  @operation({
    summary: "Get Lhgs",
  })
  @get()
  static getLhgs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lhg",
  })
  @post("{id}")
  static createLhg = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
