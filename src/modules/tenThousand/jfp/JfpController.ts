import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jfp")
export default class JfpController {
  @operation({
    summary: "Get Jfp",
  })
  @get()
  static getJfp = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jfp",
  })
  @post("{id}")
  static createJfp = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
