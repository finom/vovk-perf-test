import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kxbs")
export default class KxbController {
  @operation({
    summary: "Get Kxbs",
  })
  @get()
  static getKxbs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kxb",
  })
  @post("{id}")
  static createKxb = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
