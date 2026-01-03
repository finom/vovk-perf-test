import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bxxes")
export default class BxxController {
  @operation({
    summary: "Get Bxxes",
  })
  @get()
  static getBxxes = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bxx",
  })
  @post("{id}")
  static createBxx = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
