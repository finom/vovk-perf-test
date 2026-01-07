import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hpb")
export default class HpbController {
  @operation({
    summary: "Get Hpb",
  })
  @get()
  static getHpb = procedure({
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
