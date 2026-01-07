import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dzx")
export default class DzxController {
  @operation({
    summary: "Get Dzx",
  })
  @get()
  static getDzx = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dzx",
  })
  @post("{id}")
  static createDzx = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
