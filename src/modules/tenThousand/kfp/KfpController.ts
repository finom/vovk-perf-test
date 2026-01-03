import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kfps")
export default class KfpController {
  @operation({
    summary: "Get Kfps",
  })
  @get()
  static getKfps = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kfp",
  })
  @post("{id}")
  static createKfp = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
