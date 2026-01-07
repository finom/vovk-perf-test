import { procedure, prefix, get, post, operation } from "vovk";

@prefix("igj")
export default class IgjController {
  @operation({
    summary: "Get Igj",
  })
  @get()
  static getIgj = procedure({
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
