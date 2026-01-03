import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hpbs")
export default class HpbController {
  @operation({
    summary: "Get Hpbs",
  })
  @get()
  static getHpbs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hpb",
  })
  @post("{id}")
  static createHpb = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
