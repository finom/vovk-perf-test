import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mgqs")
export default class MgqController {
  @operation({
    summary: "Get Mgqs",
  })
  @get()
  static getMgqs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mgq",
  })
  @post("{id}")
  static createMgq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
