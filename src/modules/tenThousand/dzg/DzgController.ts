import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dzg")
export default class DzgController {
  @operation({
    summary: "Get Dzg",
  })
  @get()
  static getDzg = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dzg",
  })
  @post("{id}")
  static createDzg = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
