import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dyk")
export default class DykController {
  @operation({
    summary: "Get Dyk",
  })
  @get()
  static getDyk = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dyk",
  })
  @post("{id}")
  static createDyk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
