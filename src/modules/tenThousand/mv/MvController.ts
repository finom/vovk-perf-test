import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mv")
export default class MvController {
  @operation({
    summary: "Get Mv",
  })
  @get()
  static getMv = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mv",
  })
  @post("{id}")
  static createMv = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
