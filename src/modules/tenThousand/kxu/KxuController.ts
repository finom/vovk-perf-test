import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kxus")
export default class KxuController {
  @operation({
    summary: "Get Kxus",
  })
  @get()
  static getKxus = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kxu",
  })
  @post("{id}")
  static createKxu = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
