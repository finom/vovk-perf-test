import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dkjs")
export default class DkjController {
  @operation({
    summary: "Get Dkjs",
  })
  @get()
  static getDkjs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dkj",
  })
  @post("{id}")
  static createDkj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
