import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ljm")
export default class LjmController {
  @operation({
    summary: "Get Ljm",
  })
  @get()
  static getLjm = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ljm",
  })
  @post("{id}")
  static createLjm = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
