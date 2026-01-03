import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dzms")
export default class DzmController {
  @operation({
    summary: "Get Dzms",
  })
  @get()
  static getDzms = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dzm",
  })
  @post("{id}")
  static createDzm = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
