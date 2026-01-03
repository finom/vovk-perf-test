import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jvgs")
export default class JvgController {
  @operation({
    summary: "Get Jvgs",
  })
  @get()
  static getJvgs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jvg",
  })
  @post("{id}")
  static createJvg = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
