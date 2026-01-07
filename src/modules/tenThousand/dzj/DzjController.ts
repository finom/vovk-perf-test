import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dzj")
export default class DzjController {
  @operation({
    summary: "Get Dzj",
  })
  @get()
  static getDzj = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dzj",
  })
  @post("{id}")
  static createDzj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
