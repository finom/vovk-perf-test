import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mgks")
export default class MgkController {
  @operation({
    summary: "Get Mgks",
  })
  @get()
  static getMgks = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mgk",
  })
  @post("{id}")
  static createMgk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
