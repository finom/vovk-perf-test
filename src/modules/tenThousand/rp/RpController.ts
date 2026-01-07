import { procedure, prefix, get, post, operation } from "vovk";

@prefix("rp")
export default class RpController {
  @operation({
    summary: "Get Rp",
  })
  @get()
  static getRp = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Rp",
  })
  @post("{id}")
  static createRp = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
