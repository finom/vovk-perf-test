import { procedure, prefix, get, post, operation } from "vovk";

@prefix("meqs")
export default class MeqController {
  @operation({
    summary: "Get Meqs",
  })
  @get()
  static getMeqs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Meq",
  })
  @post("{id}")
  static createMeq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
