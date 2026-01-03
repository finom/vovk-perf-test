import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hyqs")
export default class HyqController {
  @operation({
    summary: "Get Hyqs",
  })
  @get()
  static getHyqs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hyq",
  })
  @post("{id}")
  static createHyq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
