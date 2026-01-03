import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hljs")
export default class HljController {
  @operation({
    summary: "Get Hljs",
  })
  @get()
  static getHljs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hlj",
  })
  @post("{id}")
  static createHlj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
