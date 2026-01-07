import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hzb")
export default class HzbController {
  @operation({
    summary: "Get Hzb",
  })
  @get()
  static getHzb = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hzb",
  })
  @post("{id}")
  static createHzb = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
