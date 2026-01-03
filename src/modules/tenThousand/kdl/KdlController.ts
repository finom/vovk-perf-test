import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kdls")
export default class KdlController {
  @operation({
    summary: "Get Kdls",
  })
  @get()
  static getKdls = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kdl",
  })
  @post("{id}")
  static createKdl = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
