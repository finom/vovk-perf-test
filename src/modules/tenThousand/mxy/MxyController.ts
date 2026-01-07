import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mxy")
export default class MxyController {
  @operation({
    summary: "Get Mxy",
  })
  @get()
  static getMxy = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mxy",
  })
  @post("{id}")
  static createMxy = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
