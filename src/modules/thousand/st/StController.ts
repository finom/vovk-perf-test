import { procedure, prefix, get, post, operation } from "vovk";

@prefix("sts")
export default class StController {
  @operation({
    summary: "Get Sts",
  })
  @get()
  static getSts = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create St",
  })
  @post("{id}")
  static createSt = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
