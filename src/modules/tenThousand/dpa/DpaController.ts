import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dpa")
export default class DpaController {
  @operation({
    summary: "Get Dpa",
  })
  @get()
  static getDpa = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dpa",
  })
  @post("{id}")
  static createDpa = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
