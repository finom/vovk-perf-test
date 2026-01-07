import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ill")
export default class IllController {
  @operation({
    summary: "Get Ill",
  })
  @get()
  static getIll = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ill",
  })
  @post("{id}")
  static createIll = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
