import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jjis")
export default class JjiController {
  @operation({
    summary: "Get Jjis",
  })
  @get()
  static getJjis = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jji",
  })
  @post("{id}")
  static createJji = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
