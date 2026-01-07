import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kiy")
export default class KiyController {
  @operation({
    summary: "Get Kiy",
  })
  @get()
  static getKiy = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kiy",
  })
  @post("{id}")
  static createKiy = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
