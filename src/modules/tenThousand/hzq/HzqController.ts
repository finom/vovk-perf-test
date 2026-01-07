import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hzq")
export default class HzqController {
  @operation({
    summary: "Get Hzq",
  })
  @get()
  static getHzq = procedure({
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
