import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jxr")
export default class JxrController {
  @operation({
    summary: "Get Jxr",
  })
  @get()
  static getJxr = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jxr",
  })
  @post("{id}")
  static createJxr = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
