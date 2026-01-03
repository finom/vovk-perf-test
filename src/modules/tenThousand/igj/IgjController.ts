import { procedure, prefix, get, post, operation } from "vovk";

@prefix("igjs")
export default class IgjController {
  @operation({
    summary: "Get Igjs",
  })
  @get()
  static getIgjs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Igj",
  })
  @post("{id}")
  static createIgj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
