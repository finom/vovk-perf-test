import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dzv")
export default class DzvController {
  @operation({
    summary: "Get Dzv",
  })
  @get()
  static getDzv = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dzv",
  })
  @post("{id}")
  static createDzv = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
