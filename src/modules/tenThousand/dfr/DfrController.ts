import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dfr")
export default class DfrController {
  @operation({
    summary: "Get Dfr",
  })
  @get()
  static getDfr = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dfr",
  })
  @post("{id}")
  static createDfr = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
