import { procedure, prefix, get, post, operation } from "vovk";

@prefix("els")
export default class ElController {
  @operation({
    summary: "Get Els",
  })
  @get()
  static getEls = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create El",
  })
  @post("{id}")
  static createEl = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
