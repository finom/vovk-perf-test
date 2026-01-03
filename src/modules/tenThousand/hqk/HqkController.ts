import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hqks")
export default class HqkController {
  @operation({
    summary: "Get Hqks",
  })
  @get()
  static getHqks = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hqk",
  })
  @post("{id}")
  static createHqk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
