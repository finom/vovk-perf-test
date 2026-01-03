import { procedure, prefix, get, post, operation } from "vovk";

@prefix("asks")
export default class AskController {
  @operation({
    summary: "Get Asks",
  })
  @get()
  static getAsks = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ask",
  })
  @post("{id}")
  static createAsk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
