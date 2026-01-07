import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jzn")
export default class JznController {
  @operation({
    summary: "Get Jzn",
  })
  @get()
  static getJzn = procedure({
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
