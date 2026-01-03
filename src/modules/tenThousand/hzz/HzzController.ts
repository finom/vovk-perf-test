import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hzzes")
export default class HzzController {
  @operation({
    summary: "Get Hzzes",
  })
  @get()
  static getHzzes = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hzz",
  })
  @post("{id}")
  static createHzz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
