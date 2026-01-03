import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dkns")
export default class DknController {
  @operation({
    summary: "Get Dkns",
  })
  @get()
  static getDkns = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dkn",
  })
  @post("{id}")
  static createDkn = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
