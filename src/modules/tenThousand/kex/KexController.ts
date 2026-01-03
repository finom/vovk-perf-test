import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kexes")
export default class KexController {
  @operation({
    summary: "Get Kexes",
  })
  @get()
  static getKexes = procedure({
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
