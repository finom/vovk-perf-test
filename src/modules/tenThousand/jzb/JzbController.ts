import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jzb")
export default class JzbController {
  @operation({
    summary: "Get Jzb",
  })
  @get()
  static getJzb = procedure({
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
