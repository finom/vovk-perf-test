import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dixes")
export default class DixController {
  @operation({
    summary: "Get Dixes",
  })
  @get()
  static getDixes = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dix",
  })
  @post("{id}")
  static createDix = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
