import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dyi")
export default class DyiController {
  @operation({
    summary: "Get Dyi",
  })
  @get()
  static getDyi = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dyi",
  })
  @post("{id}")
  static createDyi = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
