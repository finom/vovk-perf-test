import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kto")
export default class KtoController {
  @operation({
    summary: "Get Kto",
  })
  @get()
  static getKto = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kto",
  })
  @post("{id}")
  static createKto = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
