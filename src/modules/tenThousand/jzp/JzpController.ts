import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jzp")
export default class JzpController {
  @operation({
    summary: "Get Jzp",
  })
  @get()
  static getJzp = procedure({
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
