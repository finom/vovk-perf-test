import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hyh")
export default class HyhController {
  @operation({
    summary: "Get Hyh",
  })
  @get()
  static getHyh = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hyh",
  })
  @post("{id}")
  static createHyh = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
