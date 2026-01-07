import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gpt")
export default class GptController {
  @operation({
    summary: "Get Gpt",
  })
  @get()
  static getGpt = procedure({
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
