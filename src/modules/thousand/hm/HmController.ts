import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hm")
export default class HmController {
  @operation({
    summary: "Get Hm",
  })
  @get()
  static getHm = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hm",
  })
  @post("{id}")
  static createHm = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
