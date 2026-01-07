import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lxy")
export default class LxyController {
  @operation({
    summary: "Get Lxy",
  })
  @get()
  static getLxy = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lxy",
  })
  @post("{id}")
  static createLxy = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
