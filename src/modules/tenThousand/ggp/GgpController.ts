import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ggps")
export default class GgpController {
  @operation({
    summary: "Get Ggps",
  })
  @get()
  static getGgps = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ggp",
  })
  @post("{id}")
  static createGgp = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
