import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hhbs")
export default class HhbController {
  @operation({
    summary: "Get Hhbs",
  })
  @get()
  static getHhbs = procedure({
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
