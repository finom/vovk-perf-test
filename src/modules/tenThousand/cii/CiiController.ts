import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ciis")
export default class CiiController {
  @operation({
    summary: "Get Ciis",
  })
  @get()
  static getCiis = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cii",
  })
  @post("{id}")
  static createCii = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
