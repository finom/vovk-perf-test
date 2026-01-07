import { procedure, prefix, get, post, operation } from "vovk";

@prefix("qu")
export default class QuController {
  @operation({
    summary: "Get Qu",
  })
  @get()
  static getQu = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Qu",
  })
  @post("{id}")
  static createQu = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
