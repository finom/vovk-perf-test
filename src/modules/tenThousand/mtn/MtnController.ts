import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mtns")
export default class MtnController {
  @operation({
    summary: "Get Mtns",
  })
  @get()
  static getMtns = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mtn",
  })
  @post("{id}")
  static createMtn = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
