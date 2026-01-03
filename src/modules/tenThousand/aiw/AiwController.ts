import { procedure, prefix, get, post, operation } from "vovk";

@prefix("aiws")
export default class AiwController {
  @operation({
    summary: "Get Aiws",
  })
  @get()
  static getAiws = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Aiw",
  })
  @post("{id}")
  static createAiw = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
