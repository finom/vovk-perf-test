import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hpxes")
export default class HpxController {
  @operation({
    summary: "Get Hpxes",
  })
  @get()
  static getHpxes = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hpx",
  })
  @post("{id}")
  static createHpx = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
