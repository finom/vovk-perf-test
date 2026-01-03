import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dfrs")
export default class DfrController {
  @operation({
    summary: "Get Dfrs",
  })
  @get()
  static getDfrs = procedure({
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
