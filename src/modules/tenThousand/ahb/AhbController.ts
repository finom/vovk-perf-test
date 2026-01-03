import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ahbs")
export default class AhbController {
  @operation({
    summary: "Get Ahbs",
  })
  @get()
  static getAhbs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ahb",
  })
  @post("{id}")
  static createAhb = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
