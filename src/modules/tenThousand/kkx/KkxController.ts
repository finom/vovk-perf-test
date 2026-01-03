import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kkxes")
export default class KkxController {
  @operation({
    summary: "Get Kkxes",
  })
  @get()
  static getKkxes = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kkx",
  })
  @post("{id}")
  static createKkx = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
