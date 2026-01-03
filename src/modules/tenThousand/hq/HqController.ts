import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hqs")
export default class HqController {
  @operation({
    summary: "Get Hqs",
  })
  @get()
  static getHqs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hq",
  })
  @post("{id}")
  static createHq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
