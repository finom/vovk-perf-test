import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hzc")
export default class HzcController {
  @operation({
    summary: "Get Hzc",
  })
  @get()
  static getHzc = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hzc",
  })
  @post("{id}")
  static createHzc = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
