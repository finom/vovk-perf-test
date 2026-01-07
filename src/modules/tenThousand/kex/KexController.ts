import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kex")
export default class KexController {
  @operation({
    summary: "Get Kex",
  })
  @get()
  static getKex = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kex",
  })
  @post("{id}")
  static createKex = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
