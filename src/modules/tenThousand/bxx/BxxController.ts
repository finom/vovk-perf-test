import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bxx")
export default class BxxController {
  @operation({
    summary: "Get Bxx",
  })
  @get()
  static getBxx = procedure({
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
