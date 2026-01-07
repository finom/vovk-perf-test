import { procedure, prefix, get, post, operation } from "vovk";

@prefix("evl")
export default class EvlController {
  @operation({
    summary: "Get Evl",
  })
  @get()
  static getEvl = procedure({
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
