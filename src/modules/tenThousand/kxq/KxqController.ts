import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kxqs")
export default class KxqController {
  @operation({
    summary: "Get Kxqs",
  })
  @get()
  static getKxqs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kxq",
  })
  @post("{id}")
  static createKxq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
