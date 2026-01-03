import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kees")
export default class KeeController {
  @operation({
    summary: "Get Kees",
  })
  @get()
  static getKees = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kee",
  })
  @post("{id}")
  static createKee = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
