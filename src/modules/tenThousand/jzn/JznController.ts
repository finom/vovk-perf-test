import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jzns")
export default class JznController {
  @operation({
    summary: "Get Jzns",
  })
  @get()
  static getJzns = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jzn",
  })
  @post("{id}")
  static createJzn = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
