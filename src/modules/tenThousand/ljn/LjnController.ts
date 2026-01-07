import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ljn")
export default class LjnController {
  @operation({
    summary: "Get Ljn",
  })
  @get()
  static getLjn = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ljn",
  })
  @post("{id}")
  static createLjn = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
