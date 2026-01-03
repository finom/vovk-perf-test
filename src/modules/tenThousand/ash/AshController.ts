import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ashes")
export default class AshController {
  @operation({
    summary: "Get Ashes",
  })
  @get()
  static getAshes = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ash",
  })
  @post("{id}")
  static createAsh = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
