import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dzps")
export default class DzpController {
  @operation({
    summary: "Get Dzps",
  })
  @get()
  static getDzps = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dzp",
  })
  @post("{id}")
  static createDzp = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
