import { procedure, prefix, get, post, operation } from "vovk";

@prefix("koj")
export default class KojController {
  @operation({
    summary: "Get Koj",
  })
  @get()
  static getKoj = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Koj",
  })
  @post("{id}")
  static createKoj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
