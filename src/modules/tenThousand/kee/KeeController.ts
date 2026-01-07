import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kee")
export default class KeeController {
  @operation({
    summary: "Get Kee",
  })
  @get()
  static getKee = procedure({
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
