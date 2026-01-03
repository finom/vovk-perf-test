import { procedure, prefix, get, post, operation } from "vovk";

@prefix("rps")
export default class RpController {
  @operation({
    summary: "Get Rps",
  })
  @get()
  static getRps = procedure({
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
