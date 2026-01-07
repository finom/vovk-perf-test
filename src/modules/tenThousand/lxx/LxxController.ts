import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lxx")
export default class LxxController {
  @operation({
    summary: "Get Lxx",
  })
  @get()
  static getLxx = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lxx",
  })
  @post("{id}")
  static createLxx = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
