import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dtr")
export default class DtrController {
  @operation({
    summary: "Get Dtr",
  })
  @get()
  static getDtr = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dtr",
  })
  @post("{id}")
  static createDtr = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
