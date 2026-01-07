import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hhb")
export default class HhbController {
  @operation({
    summary: "Get Hhb",
  })
  @get()
  static getHhb = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hhb",
  })
  @post("{id}")
  static createHhb = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
