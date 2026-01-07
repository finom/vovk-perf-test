import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hyw")
export default class HywController {
  @operation({
    summary: "Get Hyw",
  })
  @get()
  static getHyw = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hyw",
  })
  @post("{id}")
  static createHyw = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
