import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dtz")
export default class DtzController {
  @operation({
    summary: "Get Dtz",
  })
  @get()
  static getDtz = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dtz",
  })
  @post("{id}")
  static createDtz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
