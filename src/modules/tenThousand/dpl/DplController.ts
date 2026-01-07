import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dpl")
export default class DplController {
  @operation({
    summary: "Get Dpl",
  })
  @get()
  static getDpl = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dpl",
  })
  @post("{id}")
  static createDpl = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
