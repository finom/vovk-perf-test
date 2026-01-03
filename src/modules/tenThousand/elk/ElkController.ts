import { procedure, prefix, get, post, operation } from "vovk";

@prefix("elk")
export default class ElkController {
  @operation({
    summary: "Get Elk",
  })
  @get()
  static getElk = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Elk",
  })
  @post("{id}")
  static createElk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
