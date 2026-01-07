import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dwo")
export default class DwoController {
  @operation({
    summary: "Get Dwo",
  })
  @get()
  static getDwo = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dwo",
  })
  @post("{id}")
  static createDwo = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
