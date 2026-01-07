import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kdl")
export default class KdlController {
  @operation({
    summary: "Get Kdl",
  })
  @get()
  static getKdl = procedure({
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
