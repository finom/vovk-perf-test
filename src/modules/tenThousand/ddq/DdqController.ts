import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ddqs")
export default class DdqController {
  @operation({
    summary: "Get Ddqs",
  })
  @get()
  static getDdqs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ddq",
  })
  @post("{id}")
  static createDdq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
