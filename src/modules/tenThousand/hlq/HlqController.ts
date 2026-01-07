import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hlq")
export default class HlqController {
  @operation({
    summary: "Get Hlq",
  })
  @get()
  static getHlq = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hlq",
  })
  @post("{id}")
  static createHlq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
