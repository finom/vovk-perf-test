import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bgts")
export default class BgtController {
  @operation({
    summary: "Get Bgts",
  })
  @get()
  static getBgts = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bgt",
  })
  @post("{id}")
  static createBgt = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
