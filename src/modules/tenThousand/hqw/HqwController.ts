import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hqw")
export default class HqwController {
  @operation({
    summary: "Get Hqw",
  })
  @get()
  static getHqw = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hqw",
  })
  @post("{id}")
  static createHqw = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
