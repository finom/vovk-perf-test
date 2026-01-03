import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jgps")
export default class JgpController {
  @operation({
    summary: "Get Jgps",
  })
  @get()
  static getJgps = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jgp",
  })
  @post("{id}")
  static createJgp = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
