import { procedure, prefix, get, post, operation } from "vovk";

@prefix("knas")
export default class KnaController {
  @operation({
    summary: "Get Knas",
  })
  @get()
  static getKnas = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kna",
  })
  @post("{id}")
  static createKna = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
