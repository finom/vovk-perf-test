import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jvi")
export default class JviController {
  @operation({
    summary: "Get Jvi",
  })
  @get()
  static getJvi = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jvi",
  })
  @post("{id}")
  static createJvi = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
