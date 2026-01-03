import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jzgs")
export default class JzgController {
  @operation({
    summary: "Get Jzgs",
  })
  @get()
  static getJzgs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jzg",
  })
  @post("{id}")
  static createJzg = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
