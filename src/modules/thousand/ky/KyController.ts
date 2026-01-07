import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ky")
export default class KyController {
  @operation({
    summary: "Get Ky",
  })
  @get()
  static getKy = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ky",
  })
  @post("{id}")
  static createKy = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
