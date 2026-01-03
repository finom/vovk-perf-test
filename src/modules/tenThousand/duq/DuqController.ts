import { procedure, prefix, get, post, operation } from "vovk";

@prefix("duqs")
export default class DuqController {
  @operation({
    summary: "Get Duqs",
  })
  @get()
  static getDuqs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Duq",
  })
  @post("{id}")
  static createDuq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
