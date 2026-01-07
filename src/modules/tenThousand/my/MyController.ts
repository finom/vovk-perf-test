import { procedure, prefix, get, post, operation } from "vovk";

@prefix("my")
export default class MyController {
  @operation({
    summary: "Get My",
  })
  @get()
  static getMy = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create My",
  })
  @post("{id}")
  static createMy = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
