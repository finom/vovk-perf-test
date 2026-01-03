import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dzgs")
export default class DzgController {
  @operation({
    summary: "Get Dzgs",
  })
  @get()
  static getDzgs = procedure({
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
