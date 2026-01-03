import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jps")
export default class JpController {
  @operation({
    summary: "Get Jps",
  })
  @get()
  static getJps = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jp",
  })
  @post("{id}")
  static createJp = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
