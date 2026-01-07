import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gii")
export default class GiiController {
  @operation({
    summary: "Get Gii",
  })
  @get()
  static getGii = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gii",
  })
  @post("{id}")
  static createGii = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
