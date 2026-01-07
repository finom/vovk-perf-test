import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dzq")
export default class DzqController {
  @operation({
    summary: "Get Dzq",
  })
  @get()
  static getDzq = procedure({
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
