import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hiis")
export default class HiiController {
  @operation({
    summary: "Get Hiis",
  })
  @get()
  static getHiis = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hii",
  })
  @post("{id}")
  static createHii = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
