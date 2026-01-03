import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hhqs")
export default class HhqController {
  @operation({
    summary: "Get Hhqs",
  })
  @get()
  static getHhqs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hhq",
  })
  @post("{id}")
  static createHhq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
