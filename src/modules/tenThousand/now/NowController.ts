import { procedure, prefix, get, post, operation } from "vovk";

@prefix("now")
export default class NowController {
  @operation({
    summary: "Get Now",
  })
  @get()
  static getNow = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Now",
  })
  @post("{id}")
  static createNow = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
