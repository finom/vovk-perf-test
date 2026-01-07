import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hpq")
export default class HpqController {
  @operation({
    summary: "Get Hpq",
  })
  @get()
  static getHpq = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hpq",
  })
  @post("{id}")
  static createHpq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
