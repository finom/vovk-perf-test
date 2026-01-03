import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jzps")
export default class JzpController {
  @operation({
    summary: "Get Jzps",
  })
  @get()
  static getJzps = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jzp",
  })
  @post("{id}")
  static createJzp = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
