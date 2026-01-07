import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lvi")
export default class LviController {
  @operation({
    summary: "Get Lvi",
  })
  @get()
  static getLvi = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lvi",
  })
  @post("{id}")
  static createLvi = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
