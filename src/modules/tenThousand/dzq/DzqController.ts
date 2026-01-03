import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dzqs")
export default class DzqController {
  @operation({
    summary: "Get Dzqs",
  })
  @get()
  static getDzqs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dzq",
  })
  @post("{id}")
  static createDzq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
