import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kkc")
export default class KkcController {
  @operation({
    summary: "Get Kkc",
  })
  @get()
  static getKkc = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kkc",
  })
  @post("{id}")
  static createKkc = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
