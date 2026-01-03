import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jzies")
export default class JzyController {
  @operation({
    summary: "Get Jzies",
  })
  @get()
  static getJzies = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jzy",
  })
  @post("{id}")
  static createJzy = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
