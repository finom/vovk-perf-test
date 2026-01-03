import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jzts")
export default class JztController {
  @operation({
    summary: "Get Jzts",
  })
  @get()
  static getJzts = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jzt",
  })
  @post("{id}")
  static createJzt = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
