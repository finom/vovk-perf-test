import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hlhs")
export default class HlhController {
  @operation({
    summary: "Get Hlhs",
  })
  @get()
  static getHlhs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hlh",
  })
  @post("{id}")
  static createHlh = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
