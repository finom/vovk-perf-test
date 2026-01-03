import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mies")
export default class MyController {
  @operation({
    summary: "Get Mies",
  })
  @get()
  static getMies = procedure({
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
