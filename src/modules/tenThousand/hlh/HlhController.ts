import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hlh")
export default class HlhController {
  @operation({
    summary: "Get Hlh",
  })
  @get()
  static getHlh = procedure({
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
