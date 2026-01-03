import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ps")
export default class PsController {
  @operation({
    summary: "Get Ps",
  })
  @get()
  static getPs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ps",
  })
  @post("{id}")
  static createPs = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
