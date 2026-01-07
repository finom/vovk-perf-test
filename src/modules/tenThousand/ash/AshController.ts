import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ash")
export default class AshController {
  @operation({
    summary: "Get Ash",
  })
  @get()
  static getAsh = procedure({
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
