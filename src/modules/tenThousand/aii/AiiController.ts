import { procedure, prefix, get, post, operation } from "vovk";

@prefix("aiis")
export default class AiiController {
  @operation({
    summary: "Get Aiis",
  })
  @get()
  static getAiis = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Aii",
  })
  @post("{id}")
  static createAii = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
