import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jphs")
export default class JphController {
  @operation({
    summary: "Get Jphs",
  })
  @get()
  static getJphs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jph",
  })
  @post("{id}")
  static createJph = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
