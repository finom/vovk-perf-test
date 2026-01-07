import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dzc")
export default class DzcController {
  @operation({
    summary: "Get Dzc",
  })
  @get()
  static getDzc = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dzc",
  })
  @post("{id}")
  static createDzc = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
