import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kgxes")
export default class KgxController {
  @operation({
    summary: "Get Kgxes",
  })
  @get()
  static getKgxes = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kgx",
  })
  @post("{id}")
  static createKgx = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
