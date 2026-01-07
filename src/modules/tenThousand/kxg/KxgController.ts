import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kxg")
export default class KxgController {
  @operation({
    summary: "Get Kxg",
  })
  @get()
  static getKxg = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kxg",
  })
  @post("{id}")
  static createKxg = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
