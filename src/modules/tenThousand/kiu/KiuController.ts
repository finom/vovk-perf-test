import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kiu")
export default class KiuController {
  @operation({
    summary: "Get Kiu",
  })
  @get()
  static getKiu = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kiu",
  })
  @post("{id}")
  static createKiu = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
