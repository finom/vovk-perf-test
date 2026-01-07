import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hlu")
export default class HluController {
  @operation({
    summary: "Get Hlu",
  })
  @get()
  static getHlu = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hlu",
  })
  @post("{id}")
  static createHlu = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
