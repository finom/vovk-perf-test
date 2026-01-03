import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jxts")
export default class JxtController {
  @operation({
    summary: "Get Jxts",
  })
  @get()
  static getJxts = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jxt",
  })
  @post("{id}")
  static createJxt = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
