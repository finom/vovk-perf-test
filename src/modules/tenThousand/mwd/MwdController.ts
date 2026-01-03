import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mwds")
export default class MwdController {
  @operation({
    summary: "Get Mwds",
  })
  @get()
  static getMwds = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mwd",
  })
  @post("{id}")
  static createMwd = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
