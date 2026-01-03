import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hfqs")
export default class HfqController {
  @operation({
    summary: "Get Hfqs",
  })
  @get()
  static getHfqs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hfq",
  })
  @post("{id}")
  static createHfq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
