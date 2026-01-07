import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hqj")
export default class HqjController {
  @operation({
    summary: "Get Hqj",
  })
  @get()
  static getHqj = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hqj",
  })
  @post("{id}")
  static createHqj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
