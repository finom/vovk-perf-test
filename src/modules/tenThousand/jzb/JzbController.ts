import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jzbs")
export default class JzbController {
  @operation({
    summary: "Get Jzbs",
  })
  @get()
  static getJzbs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jzb",
  })
  @post("{id}")
  static createJzb = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
