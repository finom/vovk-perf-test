import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dly")
export default class DlyController {
  @operation({
    summary: "Get Dly",
  })
  @get()
  static getDly = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dly",
  })
  @post("{id}")
  static createDly = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
