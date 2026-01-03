import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hlus")
export default class HluController {
  @operation({
    summary: "Get Hlus",
  })
  @get()
  static getHlus = procedure({
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
