import { procedure, prefix, get, post, operation } from "vovk";

@prefix("evls")
export default class EvlController {
  @operation({
    summary: "Get Evls",
  })
  @get()
  static getEvls = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Evl",
  })
  @post("{id}")
  static createEvl = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
