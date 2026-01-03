import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jfps")
export default class JfpController {
  @operation({
    summary: "Get Jfps",
  })
  @get()
  static getJfps = procedure({
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
