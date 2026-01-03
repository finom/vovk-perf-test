import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jvts")
export default class JvtController {
  @operation({
    summary: "Get Jvts",
  })
  @get()
  static getJvts = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jvt",
  })
  @post("{id}")
  static createJvt = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
