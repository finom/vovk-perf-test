import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ljj")
export default class LjjController {
  @operation({
    summary: "Get Ljj",
  })
  @get()
  static getLjj = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ljj",
  })
  @post("{id}")
  static createLjj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
