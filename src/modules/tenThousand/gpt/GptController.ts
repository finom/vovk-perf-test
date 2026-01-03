import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gpts")
export default class GptController {
  @operation({
    summary: "Get Gpts",
  })
  @get()
  static getGpts = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gpt",
  })
  @post("{id}")
  static createGpt = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
