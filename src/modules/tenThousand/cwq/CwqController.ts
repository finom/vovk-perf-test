import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cwqs")
export default class CwqController {
  @operation({
    summary: "Get Cwqs",
  })
  @get()
  static getCwqs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cwq",
  })
  @post("{id}")
  static createCwq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
