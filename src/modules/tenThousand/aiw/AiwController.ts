import { procedure, prefix, get, post, operation } from "vovk";

@prefix("aiw")
export default class AiwController {
  @operation({
    summary: "Get Aiw",
  })
  @get()
  static getAiw = procedure({
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
