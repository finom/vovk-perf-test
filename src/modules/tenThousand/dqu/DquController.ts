import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dqus")
export default class DquController {
  @operation({
    summary: "Get Dqus",
  })
  @get()
  static getDqus = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dqu",
  })
  @post("{id}")
  static createDqu = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
