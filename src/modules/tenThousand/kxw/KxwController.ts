import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kxw")
export default class KxwController {
  @operation({
    summary: "Get Kxw",
  })
  @get()
  static getKxw = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kxw",
  })
  @post("{id}")
  static createKxw = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
