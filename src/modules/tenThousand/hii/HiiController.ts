import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hii")
export default class HiiController {
  @operation({
    summary: "Get Hii",
  })
  @get()
  static getHii = procedure({
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
