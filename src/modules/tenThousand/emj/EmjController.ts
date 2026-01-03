import { procedure, prefix, get, post, operation } from "vovk";

@prefix("emjs")
export default class EmjController {
  @operation({
    summary: "Get Emjs",
  })
  @get()
  static getEmjs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Emj",
  })
  @post("{id}")
  static createEmj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
