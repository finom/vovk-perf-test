import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jbps")
export default class JbpController {
  @operation({
    summary: "Get Jbps",
  })
  @get()
  static getJbps = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jbp",
  })
  @post("{id}")
  static createJbp = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
