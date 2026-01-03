import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kxms")
export default class KxmController {
  @operation({
    summary: "Get Kxms",
  })
  @get()
  static getKxms = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kxm",
  })
  @post("{id}")
  static createKxm = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
