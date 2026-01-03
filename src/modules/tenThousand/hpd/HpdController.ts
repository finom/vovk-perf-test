import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hpds")
export default class HpdController {
  @operation({
    summary: "Get Hpds",
  })
  @get()
  static getHpds = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hpd",
  })
  @post("{id}")
  static createHpd = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
