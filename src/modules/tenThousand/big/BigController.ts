import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bigs")
export default class BigController {
  @operation({
    summary: "Get Bigs",
  })
  @get()
  static getBigs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Big",
  })
  @post("{id}")
  static createBig = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
