import { procedure, prefix, get, post, operation } from "vovk";

@prefix("esl")
export default class EslController {
  @operation({
    summary: "Get Esl",
  })
  @get()
  static getEsl = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Esl",
  })
  @post("{id}")
  static createEsl = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
