import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hzqs")
export default class HzqController {
  @operation({
    summary: "Get Hzqs",
  })
  @get()
  static getHzqs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hzq",
  })
  @post("{id}")
  static createHzq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
