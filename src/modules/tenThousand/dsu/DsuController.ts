import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dsu")
export default class DsuController {
  @operation({
    summary: "Get Dsu",
  })
  @get()
  static getDsu = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dsu",
  })
  @post("{id}")
  static createDsu = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
