import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hss")
export default class HssController {
  @operation({
    summary: "Get Hss",
  })
  @get()
  static getHss = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hss",
  })
  @post("{id}")
  static createHss = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
